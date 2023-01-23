export const getStaticPaths = async () => {
    const res = await fetch('http://127.0.0.1:10009/wp-json/data/v1/profiles/');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(profile => {
      return {
        params: { username: profile.username.toString() }
      }
    })
 
  
    return {
      paths,
      fallback: false
    }
  }
    
  export const getStaticProps = async (context) => {
    const username = context.params.username;
    const res = await fetch('http://127.0.0.1:10009/wp-json/data/v1/profiles/' + username);
    const data = await res.json();
  
    return {
      props: { profile: data }
    }
  }
  
  const Details = ({ profile }) => {
    return (
      <div>
        <h1>{ profile.username }</h1>
        <h1>{ profile.display_name }</h1>
      </div>
    );
  }
  
  export default Details;