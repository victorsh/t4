import { useAppSelector, useAppDispatch } from '~/store/hooks'
import { selectNotes, removeNote } from '~/store/note-slice'

const SampleRedux = (): JSX.Element => {
  const notes = useAppSelector(selectNotes)
  const dispatch = useAppDispatch()

  const deleteNote = (noteId: string) => {
    dispatch(removeNote(noteId))
  }

  const renderNotes = notes.map((note) => (
    <div key={note.id}>
      <h1>{note.heading}</h1>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Delete Note</button>
    </div>
  ))

  return (
    <div>
      <main>hello</main>
      {renderNotes}
    </div>
  )
}

export default SampleRedux
