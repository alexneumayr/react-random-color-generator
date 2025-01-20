export default function ColorBlock(props) {
  return (
    <div
      style={{
        border: 'solid 5px #000',
        borderRadius: '15px',
        width: '300px',
        height: '300px',
        backgroundColor: props.color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transition: 'background-color 0.5s',
        fontSize: '20px',
        fontWeight: 'bold',
      }}
    >
      {`Generated Color: ${props.color}`}
    </div>
  );
}
