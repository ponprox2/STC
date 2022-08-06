import clsx from 'clsx';
import faker from 'faker';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { fCurrency } from 'src/utils/formatNumber';
import Scrollbars from 'src/components/Scrollbars';
import MoreButton from 'src/components/MoreButton';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme, styled } from '@mui/material/styles';
import arrowIosForwardFill from '@iconify-icons/eva/arrow-ios-forward-fill';
import {
  Box,
  Card,
  Table,
  Button,
  Divider,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  TableContainer
} from '@mui/material';
import { MLabel } from 'src/theme';

// ----------------------------------------------------------------------

const INVOICES = [
  {
    id: faker.datatype.uuid(),
    category: 'Android',
    price: faker.finance.amount(),
    status: 'in_progress'
  },
  {
    id: faker.datatype.uuid(),
    category: 'Windows',
    price: faker.finance.amount(),
    status: 'paid'
  },
  {
    id: faker.datatype.uuid(),
    category: 'Mac',
    price: faker.finance.amount(),
    status: 'out_of_date'
  },
  {
    id: faker.datatype.uuid(),
    category: 'Windows',
    price: faker.finance.amount(),
    status: 'paid'
  },
  {
    id: faker.datatype.uuid(),
    category: 'Windows',
    price: faker.finance.amount(),
    status: 'in_progress'
  }
];

const useStyles = styled((theme) => ({
  root: {}
}));

// ----------------------------------------------------------------------

NewInvoice.propTypes = {
  className: PropTypes.string
};

function NewInvoice({ className, ...other }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardHeader title="New Invoice" />
      <Scrollbars>
        <TableContainer sx={{ minWidth: 720, mt: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Invoice ID</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {INVOICES.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{`INV-${row.id}`}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{fCurrency(row.price)}</TableCell>
                  <TableCell>
                    <MLabel
                      variant={
                        theme.palette.mode === 'light' ? 'ghost' : 'filled'
                      }
                      color={
                        (row.status === 'in_progress' && 'warning') ||
                        (row.status === 'out_of_date' && 'error') ||
                        'success'
                      }
                    >
                      {row.status}
                    </MLabel>
                  </TableCell>
                  <TableCell align="right">
                    <MoreButton />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbars>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View All
        </Button>
      </Box>
    </Card>
  );
}

export default NewInvoice;
