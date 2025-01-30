import { useAlert } from "../alert/AlertContext";

export default function AlertExample() {
  const { showAlert } = useAlert();

  return (
    <div>
      <button onClick={() => showAlert('success', 'Operasi berhasil!')}>
        Tampilkan Success
      </button>
      <button onClick={() => showAlert('error', 'Terjadi kesalahan!')}>
        Tampilkan Error
      </button>
      <button onClick={() => showAlert('warning', 'Ini peringatan!')}>
        Tampilkan Warning
      </button>
    </div>
  );
}