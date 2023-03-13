import { useSelector } from "react-redux";

const Notification = () => {
  let style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };

  const notification = useSelector(({ notification }) => {
    if (notification === null) {
       style = {
        display: 'none',
       }
    }
    return notification;
  });



  return (
    <div style={style}>
      {notification}
    </div>
  );
};

export default Notification;