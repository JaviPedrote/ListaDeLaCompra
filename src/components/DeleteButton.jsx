import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/listSlice'// Asegúrate de importar desde la ubicación correcta

const DeleteButton = ({ productId }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(productId));
  }

  return (
      <button
        className="list-buttons"
        onClick={handleDelete}
      >
        Eliminar
        </button>
  );
};

export default DeleteButton;