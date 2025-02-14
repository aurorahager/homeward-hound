import { FindMatchButton } from './styles'

export default function MatchButton(): JSX.Element {
  const handleGenerateMatch = () => {
    // setIsOpen(true)
  }
  return (
    <FindMatchButton
      color="secondary"
      //   disabled={!faves.length}
      //   sx={{ width: 220, height: 54, fontSize: '1.1rem', fontWeight: 500 }}
      variant="contained"
      onClick={handleGenerateMatch}
    >
      Generate Match
    </FindMatchButton>
  )
}
