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
      }}
    >
      <h1
        style={{
          fontSize: '20px',
          marginBottom: 0,
        }}
      >
        Generated color:
      </h1>
      <p style={{ fontWeight: 'bold' }}>{props.color}</p>
    </div>
  );
}
