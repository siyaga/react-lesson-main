import Content from './fragments/content';
import './styles.css';

function Profile() {
  let data = "ini adalah isi profile";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default Profile;
