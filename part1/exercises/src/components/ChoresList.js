import classes from './ChoresList.module.css';

export default function ChoresList () {
   return  <div> <h3 className={classes.choresHeading}>To Do:</h3>
      <p className={classes.choresText}>Do schoolwork <br></br>
   Sleep<br></br>
   Eat</p>
</div>
}