import { Button, TextInput } from '@mantine/core'

export const Subscribe = () => {
  return (
    <div className="mt-20 pb-5 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
      <h1 className="text-4xl text-center font-bold mb-3 text-mine-shaft-100 w-2/5">
        Never Want to Miss Any <span className="text-bright-sun-400"> Job News?</span>
      </h1>
      <div className='flex items-center gap-4 bg-mine-shaft-700 px-3 py-2 rounded-xl'>
        <TextInput
          className='font-semibold [&_input]:text-mine-shaft-100 flex-1'
          variant='unstyled'
          size='xl'
          placeholder='your@email.com'
        />

        <Button
          variant='filled'
          color='brightSun.4'
          size='xl'
        >
          Subscribe
        </Button>
      </div>
    </div>
  )
}