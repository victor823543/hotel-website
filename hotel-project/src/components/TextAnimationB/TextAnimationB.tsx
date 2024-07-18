import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
}

const TextAnimationB: React.FC<AnimatedTextProps> = ({ text }) => {
  const words = text.split(' ');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{once: true}}
          transition={{ duration: 0.3, delay: index * 0.02 }}
          style={{ marginRight: '8px', position: 'relative', display: 'inline-block', alignSelf: 'end', lineHeight: 1.5}}
        >
          {index === 0 ?
              <><span style={{fontSize: '4em', lineHeight: 0, fontWeight: 700}}>{word[0]}</span> <span>{word.slice(1)}</span> </>
            :
              word
          }
        </motion.span>
      ))}
    </div>
  );
};

export default TextAnimationB;
