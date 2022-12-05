import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';
import './styles.css';

function Profile() {
  let data = "ini adalah isi profile";

  return (
    <div>
      <section className='content-containerr'>
        <Content data={data} />
        <Sidebar />
      </section>
    </div>
  );
}

export default Profile;
