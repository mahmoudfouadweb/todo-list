import classes from './AddItems.module.css';

function AddItem() {
  return (
    <form className={classes.additem}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" placeholder="example mohammed salah" id="name" />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input type="text" placeholder="example mohammed salah" id="age" />
      </div>
    </form>
  );
}

export default AddItem;
