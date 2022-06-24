import { ActionIcon } from '@mantine/core'
import { Plus } from 'tabler-icons-react'
const AddButton = ({ setIsModalOpen }) => {
  return (
    <ActionIcon
      variant='filled'
      styles={{
        root: {
          borderRadius: '50%',
          backgroundColor: 'white',
          '&:hover': { backgroundColor: '#EEEEEE' },
        },
      }}
      onClick={() => setIsModalOpen(true)}
    >
      <Plus size={24} strokeWidth={2} color={'#79CDD2'} />
    </ActionIcon>
  )
}
export default AddButton