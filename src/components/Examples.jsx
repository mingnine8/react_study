import { useState } from 'react';

import TabButton from './TabButton.jsx'
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectButton => Components, JSX, Props, State
    setSelectedTopic(selectedButton);
    console.log(selectedTopic, "___", selectedButton);
  }

    // console.log('APP COMPONENT EXECUTING');

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        )
    }

    return(
        <Section title="Examples" id="examples">
            <Tabs 
                // buttonsContainer={Section} or "menu" or "div"
                ButtonsContainer="menu"
                buttons={
                <>
                    <TabButton
                        isSelected={selectedTopic === 'components'}
                        // onSelect={() => handleSelect('components')}
                        onClick={() => handleSelect('components')}
                    >
                        Component
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'jsx'}
                        onClick={() => handleSelect('jsx')}
                    >
                        JSX
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'props'}
                        onClick={() => handleSelect('props')}
                    >
                        Props
                    </TabButton>
                    <TabButton
                        isSelected={selectedTopic === 'state'}
                        onClick={() => handleSelect('state')}
                    >
                        State
                    </TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    );
}