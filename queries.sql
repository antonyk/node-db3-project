-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select p.productname, c.categoryname
from product p
left join category c on p.CategoryId = c.Id 

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select o.id, s.companyname
from "order" o
left join shipper s on o.ShipVia = s.Id
where o.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select p.productname, d.quantity
from OrderDetail d
inner join Product p on d.ProductId = p.Id
where d.OrderId = 10251
order by productname asc

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select o.id as OrderID, c.companyname, e.lastname
from "order" o
inner join Customer c on o.CustomerId = c.Id 
inner join Employee e on o.EmployeeId = e.Id

-- Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.

select c.categoryname, count(p.id) as Count
from product p
inner join category c on p.CategoryId = c.Id
group by p.CategoryId

-- Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

select d.orderid, count(d.productid) as ItemCount
from OrderDetails d
group by OrderId

