import CoreConcept from '../components/CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
          <h2>TCore Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem}
              />
            ))}
          </ul>
        </section>
    );
}