import Content from './fragments/content';
import './styles.css';

function Feature() {
  let data = "Feature Image Gallery with CSS Grid & Flexbox Fallback";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default Feature;
