let express = require('express');
let cors = require('cors');

let app = express();
app.use(cors());

let port = 3000;

//Endpoint 1: Calculate the Returns of the Stocks added


app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  let returnValue = (marketPrice - boughtAt) * quantity
  res.send(returnValue.toString());
});

//Endpoint 2: Calculate the Total Returns

function getTotalReturns(stock1,stock2,stock3,stock4) {
  return  stock1 + stock2 + stock3 + stock4;
}


app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  
  res.send(getTotalReturns(stock1,stock2,stock3,stock4).toString());
});

//Endpoint 3: Calculate the Return Percentage

function getReturnPercentage(boughtAt,returns){
  return (returns / boughtAt) * 100;
}


app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  res.send(getReturnPercentage(boughtAt,returns).toString());
});

//Endpoint 4: Calculate the Total Return Percentage


function getTotalReturnPercentage(stock1,stock2,stock3,stock4) {
  return  stock1 + stock2 + stock3 + stock4;
}

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(getTotalReturnPercentage(stock1,stock2,stock3,stock4).toString());
});


//Endpoint 5: Identify the Status of Stocks based on their Return Value

function getStockStatus(returnPercentage){
  let result;
  if (returnPercentage > 0) {
    return 'profit';
  } else {
    return 'loss';
  }
}

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
 
  res.send(getStockStatus(returnPercentage).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
