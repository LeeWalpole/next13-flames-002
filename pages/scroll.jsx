import Content from '../components/Content'

export default function index(props) {
  return (
    <>
      <div>
        <Content data={props.data} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://www.thaiflames.app/backend/wp-json/data/v1/profiles?_limit=1"
  ).then((response) => response.json());
  return {
    props: { data }
  };
};