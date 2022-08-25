import classes from './AddItems.module.css';

function AddItem() {
  return (
    <div className={classes.additem}>
      <div>Item</div>
      <div className={classes.icon}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </div>
  );
}

export default AddItem;
