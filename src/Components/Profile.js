// Profile.js
export function Profile({ name, image, profession }) {
  return (
    <div>
      <h2>{name}</h2>
      <img 
        src={image} 
        alt={name} 
        width={100} 
        height={100} 
        style={{ borderRadius: '50%' }}
      />
      <p>{profession}</p>
    </div>
  );
}
