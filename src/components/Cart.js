
import React, { useState } from 'react';
import { Button, Box, Drawer } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from "@mui/material";
import AppNavbar from './AppNavbar';
import Store from './Store';

const initialCartElements = [
  { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', quantity: 2 },
  { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', quantity: 3 },
  { title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png', quantity: 1 }
];

const Cart = () => {

  const [isopen, setIsOpen] = useState(false);
  const [cartElements, setCartElements] = useState(initialCartElements);

  

  const toggleDrawer = () => {
    console.log(" function triggered");  
    setIsOpen(!isopen);
  };
  const handleRemoveItem = (itemTitle) => {
    const updatedCart = cartElements.filter(cart => cart.title !== itemTitle);
    setCartElements(updatedCart);
  };
  

  return (
    <div>
     <Store toggleDrawer={toggleDrawer} />
    
     <AppNavbar toggleDrawer={toggleDrawer} />
      <Drawer
        anchor="right"
        open={isopen}
        onClose={toggleDrawer}
      >
        
        <Box sx={{ width: 500, padding: 2 }} role="presentation">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ITEM</TableCell>
                  <TableCell align="right">PRICE</TableCell>
                  <TableCell align="right">QUANTITY</TableCell>
                  <TableCell align="right">ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartElements.map((cart) => (
                  <TableRow key={cart.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ display: 'flex' }}>
                      <img src={cart.imageUrl} alt={cart.title} style={{ maxWidth: '80px', marginTop: '10px' }} />
                    </TableCell>
                    <TableCell align="right">{cart.title}</TableCell>
                    <TableCell align="right">{cart.price}</TableCell>
                    <TableCell align="right">
                      <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Checkbox />
                        <Box sx={{ position: 'absolute', pointerEvents: 'none', fontSize: '12px', color: '#000' }}>
                          {cart.quantity}
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: 'lightcoral', '&:hover': { backgroundColor: 'red' }, color: 'white' }}
                        onClick={() => handleRemoveItem(cart.title)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
          </TableContainer>
          
        </Box>
      
      </Drawer>
      
    </div>
  );
};

export default Cart;
