/* eslint-disable react/prop-types */
const Title = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>{props.desc}</h4>
    </div>
  );
};

export default Title;
