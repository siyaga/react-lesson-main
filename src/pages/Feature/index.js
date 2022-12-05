import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';
import './styles.css';

function Feature() {
  let data = "Feature Image Gallery with CSS Grid & Flexbox Fallback";

  return (
    <div>
      <section className='content-containerrrr'>
        <Content data={data} />
        <Sidebar />
      </section>
    </div>
  );
}

export default Feature;
