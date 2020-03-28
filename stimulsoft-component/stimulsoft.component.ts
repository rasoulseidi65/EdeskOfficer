import { CharacteristicService } from './../../services/characteristic/characteristic.service';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

declare let Stimulsoft: any;

@Component({
  selector: 'app-stimulsoft',
  templateUrl: './stimulsoft.component.html',
  styleUrls: ['./stimulsoft.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StimulsoftComponent implements OnInit, OnDestroy {

  private _destroyed$ = new Subject();
  options: any;
  viewer: any;
  designer: any;
  json: any[] = [];
  selectedColumns: any[] = [];
  reportItem: any;
  columnWidth = 3.5;
  lastPos = {0: 15.51, 1: 24.19};


  constructor(private http: Http,
    private route: ActivatedRoute,
    private characteristicService: CharacteristicService) {
      this.route.queryParams.pipe(takeUntil(this._destroyed$)).subscribe(params => {
        this.selectedColumns = JSON.parse(params['selectedColumns']);
        this.reportItem = JSON.parse(params['filterValues']);
      });
  }

  ngOnInit() {
    this.characteristicService.filterCharacteristic(this.reportItem).pipe(takeUntil(this._destroyed$)).subscribe(
      response => {
        if (response.isSuccessful) {
          this.json = response.result;
          this.createViewer();
        }
      });

  }

  trimString(str) {
    return str.replace(/\s/g, '');
  }

  createViewer() {

    // Specify necessary options for the viewer
    this.options = new Stimulsoft.Viewer.StiViewerOptions();
    this.options.appearance.scrollbarsMode = true;
    this.options.toolbar.showDesignButton = true;
    this.options.toolbar.printDestination = Stimulsoft.Viewer.StiPrintDestination.Direct;
    this.options.appearance.htmlRenderMode = Stimulsoft.Report.Export.StiHtmlExportMode.Table;

    // Create an instance of the viewer
    this.viewer = new Stimulsoft.Viewer.StiViewer(this.options, 'StiViewer', false);
    const report = new Stimulsoft.Report.StiReport();
    report.loadFile('src/reports/MyReport.mrt');
    // let text;
    let index = 0;
    const databand = report.getComponentByName('DataBand');
    const headerBand = report.getComponentByName('HeaderBand');
    report.pages.getByIndex(0).watermark.enabled = false;
    report.pages.getByIndex(0).watermark.Image = null;
    if (this.selectedColumns.length * this.columnWidth > report.pages.getByIndex(0).pageWidth - 2) {
      report.pages.getByIndex(0).orientation = 1 ;
    }
    this.selectedColumns.forEach(element => {

      switch (element.tableName) {
        case 0:
        switch (element.item) {
          case 'code':
          // text = report.getComponentByName('code');
          // text.enabled = true;
          // text = report.getComponentByName('title_code');
          // text.enabled = true;
          headerBand.components.add(this.createHeaderText(report, index , 'code', 'کد'));
          databand.components.add(this.createDataText(report, index , 'code'));
          index++;
          break;
          case 'example_one':
          headerBand.components.add(this.createHeaderText(report, index , 'example_one', 'مثال یک'));
          databand.components.add(this.createDataText(report, index , 'example_one'));
          index++;
          break;
          case 'example_two':
          headerBand.components.add(this.createHeaderText(report, index , 'example_two', 'مثال دو'));
          databand.components.add(this.createDataText(report, index , 'example_two'));
          index++;
          break;
        }
        break;
        case 1:
        headerBand.components.add(this.createHeaderText(report, index , element.item, element.item));
        databand.components.add(this.createDataText(report, index , element.item));
        index++;
        break;

      }
    });

    const dataSet = new Stimulsoft.System.Data.DataSet('MyDataSet');
    dataSet.readJson(this.json);
    report.regData(dataSet.dataSetName, '', dataSet);
    report.dictionary.connect(false);
    report.dictionary.synchronize();
    report.render();
    this.viewer.report = report;

    // // Add the design button event
    this.viewer.onDesignReport = (e) => {
      e.visible = false;
      if (this.designer == null) {
        this.createDesigner();
      }
      this.designer.visible = true;
      this.designer.report = e.report;
    };

    this.viewer.renderHtml('content');
  }
  // End F

  createDesigner() {
    // Set the full screen mode for the designer
    const options = new Stimulsoft.Designer.StiDesignerOptions();
    options.appearance.fullScreenMode = true;

    // Create the report designer with specified options
    this.designer = new Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false);

    // Assign the onSaveReport event function
    this.designer.onSaveReport = function (e) {
    const jsonStr = e.report.saveDocumentToJsonString();
    alert('Save to JSON string complete.');
    };

    // Assign the onCreateReport event function
    this.designer.onCreateReport = function (e) {
      const ds = new Stimulsoft.System.Data.DataSet('SimpleDataSet');
      ds.readJson(this.json);
      e.report.regData('SimpleDataSet', 'SimpleDataSet', ds);
      e.report.dictionary.connect(false);
      e.report.dictionary.synchronize();
    };

    // Assign the onPreviewReport event function
    this.designer.onPreviewReport = function (e) {
      switch (e.format) {
        case Stimulsoft.Report.StiExportFormat.Html:
            e.settings.zoom = 2; // Set HTML zoom factor to 200%
            break;
      }
    };

    // Assign the onExit event function
    this.designer.onExit = function (e) {};

    // Create a new report instance
    const dataSet = new Stimulsoft.System.Data.DataSet('SimpleDataSet');
    dataSet.readJson(this.json);
    const report = new Stimulsoft.Report.StiReport();
    report.regData(dataSet.dataSetName, '', dataSet);
    report.dictionary.connect(false);
    report.dictionary.synchronize();

    // Load report from url
    report.loadFile('src/reports/MyReport.mrt');
    // Edit report template in the designer
    this.designer.report = report;
    // Show the report designer in the 'content' element
    this.designer.renderHtml('content');
  }
  // End F

  createNewDesigner () {
    // Set the full screen mode for the designer
    const options = new Stimulsoft.Designer.StiDesignerOptions();
    options.appearance.fullScreenMode = true;

    // Create the report designer with specified options
    const designer = new Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false);

    const dataSet = new Stimulsoft.System.Data.DataSet('SimpleDataSet');
    dataSet.readJson(this.json);
    const report = new Stimulsoft.Report.StiReport();
    report.regData(dataSet.dataSetName, '', dataSet);
    report.dictionary.connect(false);
    report.dictionary.synchronize();
    // report.loadFile('src/reports/MyReport.mrt');
    designer.report = report;

    designer.renderHtml('content');
  }

  createReport() {
    const viewer = new Stimulsoft.Viewer.StiViewer(null, 'StiViewer', false);
    // const jsonData = JSON.parse(jsonString.value);

    const dataSet = new Stimulsoft.System.Data.DataSet();
    dataSet.readJson(this.json);
    const data = dataSet.tables.getByIndex(1);
    const report = new Stimulsoft.Report.StiReport();

    // Add data to datastore
    report.regData('data', 'data', dataSet);

    // Fill dictionary
    const dataSource = new Stimulsoft.Report.Dictionary.StiDataTableSource(data.tableName, data.tableName, data.tableName);
    dataSource.columns.add(new Stimulsoft.Report.Dictionary.StiDataColumn('Column1', 'Column1', 'Column1'));
    dataSource.columns.add(new Stimulsoft.Report.Dictionary.StiDataColumn('Column2', 'Column2', 'Column2'));
    dataSource.columns.add(new Stimulsoft.Report.Dictionary.StiDataColumn('Column3', 'Column3', 'Column3'));
    report.dictionary.dataSources.add(dataSource);

    const page = report.pages.getByIndex(0);

    // Create HeaderBand
    const headerBand = new Stimulsoft.Report.Components.StiHeaderBand();
    headerBand.height = 0.5;
    headerBand.name = 'HeaderBand';
    page.components.add(headerBand);

    // Create Databand
    const dataBand = new Stimulsoft.Report.Components.StiDataBand();
    dataBand.dataSourceName = data.tableName;
    dataBand.height = 0.5;
    dataBand.name = 'DataBand';
    page.components.add(dataBand);

    // Create texts
    let pos = 0;

    const columnWidth = Stimulsoft.Base.StiAlignValue.alignToMinGrid(page.width / data.columns.count, 0.1, true);

    let nameIndex = 1;

    for (let index = 1; index < data.columns.list.length; index++) {
      // ####### const dataColumn = data.columns.list[index];
      const dataColumn = data.columns.list[index];
    // Create text on header
    const headerText = new Stimulsoft.Report.Components.StiText();
    headerText.clientRectangle = new Stimulsoft.System.Drawing.Rectangle(pos, 0, columnWidth, 0.5);
    headerText.text = dataColumn.caption;
    headerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
    headerText.name = 'HeaderText' + nameIndex.toString();
    // headerText.brush = new Stimulsoft.Base.Drawing.StiSolidBrush(System.Drawing.Color.lightGreen);
    headerText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.All;
    headerBand.components.add(headerText);

    // Create text on Data Band
    const dataText = new Stimulsoft.Report.Components.StiText();
    dataText.clientRectangle = new Stimulsoft.System.Drawing.Rectangle(pos, 0, columnWidth, 0.5);
    dataText.text = `{${data.tableName}.${ dataColumn.columnName}}`;
    dataText.name = 'DataText' + nameIndex.toString();
    dataText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.All;

    // Add highlight
    const condition = new Stimulsoft.Report.Components.StiCondition();
    // condition.backColor = System.Drawing.Color.cornflowerBlue;
    // condition.textColor = System.Drawing.Color.black;
    condition.expression = '(Line & 1) == 1';
    condition.item = Stimulsoft.Report.Components.StiFilterItem.Expression;
    dataText.conditions.add(condition);

    dataBand.components.add(dataText);

    pos = pos + columnWidth;
    nameIndex++;
  }

    // Create FooterBand
    const footerBand = new Stimulsoft.Report.Components.StiFooterBand();
    footerBand.height = 0.5;
    footerBand.name = 'FooterBand';
    page.components.add(footerBand);

    // Create text on footer
    const footerText = new Stimulsoft.Report.Components.StiText();
    footerText.clientRectangle = new Stimulsoft.System.Drawing.Rectangle(0, 0, page.width, 0.5);
    footerText.text = 'Count - {Count()}';
    footerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Right;
    footerText.name = 'FooterText';

    // footerText.brush = new Stimulsoft.Base.Drawing.StiSolidBrush(System.Drawing.Color.lightGreen);
    footerBand.components.add(footerText);

    // Render report
    viewer.report = report;
    viewer.renderHtml('content');
  }

  createHeaderText(report, index, name, text) {
    const page = report.pages.getByIndex(0);
    page.watermark.enabled = false;
    const pos = this.lastPos[page.orientation];
    // Create text on header
    const headerText = new Stimulsoft.Report.Components.StiText();
    if (pos - index * this.columnWidth > 0) {
      headerText.clientRectangle = new Stimulsoft.System.Drawing.Rectangle(pos - index * this.columnWidth, 0, this.columnWidth, 1);
    }
    headerText.text = text;
    headerText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
    headerText.name = 'title_' + name;
    headerText.canBreak = true;
    headerText.canGrow = true;
    headerText.canShrink = true;
    headerText.dockStyle = 1;
    headerText.dockable = true;
    headerText.growToHeight = true;
    headerText.shiftMode = 0;
    headerText.growToHeight = true;
    // headerText.brush = new Stimulsoft.Base.Drawing.StiSolidBrush(System.Drawing.Color.lightGreen);
    headerText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.All;
    // headerBand.components.add(headerText);
    return headerText;
  }

  createDataText(report, index, name) {
    const page = report.pages.getByIndex(0);

    const pos = this.lastPos[page.orientation];

    // Create text on header
    const dataText = new Stimulsoft.Report.Components.StiText();
    if (pos - index * this.columnWidth > 0) {
      dataText.clientRectangle = new Stimulsoft.System.Drawing.Rectangle(pos - index * this.columnWidth, 0, this.columnWidth, 1);
    }
    dataText.text = '{root.' + this.trimString(name) + '}';
    dataText.horAlignment = Stimulsoft.Base.Drawing.StiTextHorAlignment.Center;
    dataText.name = this.trimString(name);
    dataText.canBreak = true;
    dataText.canGrow = true;
    dataText.canShrink = true;
    dataText.dockStyle = 1;
    dataText.dockable = true;
    dataText.growToHeight = true;
    dataText.shiftMode = 0;
    dataText.growToHeight = true;
    // headerText.brush = new Stimulsoft.Base.Drawing.StiSolidBrush(System.Drawing.Color.lightGreen);
    dataText.border.side = Stimulsoft.Base.Drawing.StiBorderSides.All;
    // headerBand.components.add(headerText);
    return dataText;
  }
  // End F

  public ngOnDestroy (): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
  // End F
}
