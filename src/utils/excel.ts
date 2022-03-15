import { Column } from '@/components/DataCard/type';
import ExcelJS from 'exceljs';
import moment from 'moment';
import { download } from './file';

const prefix = `Row_`;

const exportExcel = async ({
  title = '数据导出',
  columns: orginColumns,
  dataSource = [],
}: {
  columns: Column[];
  dataSource: any[];
  title?: string;
}) => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet(title);

  // 避免出现非常规的 key, 比如 0
  const columns = orginColumns.map(({ key, ...rest }) => ({
    key: `${prefix}${key}`,
    ...rest,
  }));

  //  添加表头
  sheet.columns = columns;

  // 添加数据行
  const rows = dataSource.map((record) => calcRow(record, columns));

  sheet.addRows(rows);

  //   转为 buffer
  const buffer = await workbook.xlsx.writeBuffer();

  //   触发浏览器下载
  download(
    buffer,
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    `${title}__${moment().format('YYYY-MM-DD__HH-mm-ss')}.xlsx`,
  );
};

// 格式化每行数据
const calcRow = (record: any, columns: Column[]) => {
  let row: any = {};

  for (let { key, excel } of columns) {
    if (typeof excel === 'function') {
      // @ts-ignore
      row[key] = excel(record);
    } else {
      row[key] = record[key.slice(prefix.length)]; // 转换为原始的 key
    }
  }
  return row;
};

export default exportExcel;
