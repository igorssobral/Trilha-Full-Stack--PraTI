/* eslint-disable react/prop-types */
const Title = (props) => {
  return (
    <div className='flex flex-col gap-5 mt-5'>
      <h1 className='max-md:text-3xl'>{props.title}</h1>
      <h4>{props.desc}</h4>
    </div>
  );
};

export default Title;
