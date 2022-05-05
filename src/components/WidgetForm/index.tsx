import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/idea.svg';
import thoughImageUrl from '../../assets/thought.svg';

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideiaImageUrl,
      alt: 'Imagem de uma lâmpada',
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughImageUrl,
      alt: 'Imagem de um balão de pensamentos',
    }
  }
}

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      {!feedbackType ? 
      (
        <div className="flex py-8 gap-2 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col gap-2 border-2 items-center border-transparent hover:border-brand-500 transition-all duration-300 ease-linear focus:border-brand-500 focus:outline-none"
                onClick={() => setFeedbackType(key as FeedbackType)}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
          })
        }
      </div>
      ) : 
      (
        <div className="flex flex-col gap-2">
          <p>Hello World</p>
        </div>
      )
    }
      

      <footer className="text-xs text-neutral-400">
        <span>Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a></span>
      </footer>
    </div>
  )
}