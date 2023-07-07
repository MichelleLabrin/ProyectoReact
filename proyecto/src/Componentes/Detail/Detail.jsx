import { useParams } from 'react-router-dom';

function Detail({ products }) {
const { id } = useParams();
const findProduct = products.find((product) => product.id === id);

if (findProduct) {
return (
<div>
<h3>{findProduct.name}</h3>
<img src={findProduct.image} alt="" />
</div>
);
} else {
return (
<img
  src="" alt="not found"
/>
);
}
}

export default Detail;
