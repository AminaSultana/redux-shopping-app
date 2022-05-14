import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const items = [
  { id:"product1",title: "Test Item", description: "This is a product", price: 650 },
  { id:"product2",title: "Test Item", description: "This is a product", price: 610 },
  { id:"product3",title: "Test Item2", description: "This is a product", price: 176 },
  { id:"product4",title: "Test Item3", description: "This is a product", price: 829 },
  { id:"product5",title: "Test Item4", description: "This is a product", price: 900 },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map((item) => {
          return (
            <ProductItem
            key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
