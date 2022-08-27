export interface DataRecordWrapper<T = any> {
  recordData: T;
  selected: boolean;
}

export enum DatatableColumnType {
  /**
   * Datatable will infer column type from value:
   * - `undefined` - `String`
   * - `null` - `String`
   * - `string` - `String`
   * - `number` - `Number`
   * - `boolean` - `Boolean`
   * */
  Infer = "infer",
  Boolean = "boolean",
  /** Date in ISO 8601 */
  Date = "date",
  /** Form will render it as `<input type="text">` */
  String = "string",
  /** Form will render it as `<textarea>` */
  Text = "text",
  /** Form will render it as `<input type="color">` */
  Color = "color",
  /** Form will render it as `<input type="email">` */
  Email = "email",
  /** Form will render it as `<input type="password">` */
  Password = "password",
  Number = "number",
  /** This one will need also `selectValues` to be set. */
  Select = "select"
}

/**
 * Tells datatable how to display column name and columns order.
 */
export interface DatatableColumn {
  /**
   * Key in single data record
   */
  key: string;

  /**
   * Column header label
   */
  label?: string;

  /**
   * Description of column purpouse
   */
  description?: string;

  /**
   * Is column editable. It works only if datatable is set as editable.
   *
   * @default true
   */
  editable?: boolean;

  /**
   * Type used by datatable to generate edit form.
   */
  type?: DatatableColumnType;

  /**
   *  Is value in column required. Used in edit form.
   */
  required?: boolean;

  /** Only usable if used with `Number` type. Sets the `min` attribute on input */
  min?: number;
  /** Only usable if used with `Number` type. Sets the `max` attribute on input */
  max?: number;
  /** Only usable if used with `Number` type. Sets the `step` attribute on input */
  step?: number;

  /** Must be provided if type is `Select` */
  selectValues?: string[];
}


export class ColumnEditUpdateEvent<T = any> {
  constructor(public readonly prev: T, public readonly updated: T) {}
}
