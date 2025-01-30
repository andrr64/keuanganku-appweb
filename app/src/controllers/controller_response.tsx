class ControllerResponse<T = any> {
  status: boolean;
  detail: string;
  data: T | null;

  constructor({ status, detail, data }: { status: boolean; detail: string; data: T | null }) {
    this.status = status;
    this.detail = detail;
    this.data = data;
  }

  // Getter untuk memeriksa apakah status adalah sukses
  get is_success(): boolean {
    return this.status === true;
  }
}

export { ControllerResponse };
