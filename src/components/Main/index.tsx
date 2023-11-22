const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white p-6 text-center">
      <img src="" alt="" className="w-96 mb-8" />
      <h1 className="text-4xl font-bold">{title}</h1>
      <h2 className="text-2xl mb-8">{description}</h2>
      <img src="" alt="" className="mt-12 min-w-[30rem] max-w-[100%]" />
    </main>
  )
}

export default Main
