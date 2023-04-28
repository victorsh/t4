import { type NextPage } from 'next';
import Head from 'next/head';
import { useAppSelector, useAppDispatch } from '~/store/hooks'
import { selectNotes, removeNote } from '~/store/note-slice'

const SampleRedux: NextPage = (): JSX.Element => {
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
      <Head>
        <title>T4 App</title>
        <meta name="description" content="t3 + Three" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>hello</main>
      {renderNotes}
    </div>
  )
}

export default SampleRedux
