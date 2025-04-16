import React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';  // Asegúrate de importar correctamente el hook

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CartWidget = () => {
  const { cart } = useCart();  // Aquí se obtiene el carrito desde el contexto
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // Total de items

  return (
    <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }} aria-label="Ir al carrito">
      <IconButton aria-label={`Carrito con ${totalItems} productos`} color="inherit">
        <StyledBadge badgeContent={totalItems} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
};

export default CartWidget;

