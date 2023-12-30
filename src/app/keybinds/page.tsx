import { SimpleLayout } from '@/components/SimpleLayout'

const title = 'Keybinds'
export const metadata = {
  title: title,
  description: 'My Editor Keybinds.',
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
}

export default function Keybinds() {
  return (
    // @TODO Move Centering rule <SimpleLayout/>
    <SimpleLayout
      title={<>My Editor Keybinds.</>}
      intro="For share setting across 3 Editor and prevent forget."
    >
      <div className="w-full sm:w-[400px] mx-auto">
        <table className="min-w-full border-collapse">
          <thead className="border-b-2 border-gray-300">
            <tr>
              <th className="py-2 px-4 font-bold text-left">Action</th>
              <th className="py-2 px-4 font-bold text-left">Shortcut</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                Move Cursor
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Cursor Right
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + F</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Cursor Left
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + B</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">Cursor Top</td>
              <td className="py-2 px-4 border-b border-gray-300">^ + P</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Cursor Down
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + N</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Cursor Right Word
              </td>
              <td className="py-2 px-4 border-b border-gray-300">M + F</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Cursor Left Word
              </td>
              <td className="py-2 px-4 border-b border-gray-300">M + B</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Cursor Top Block
              </td>
              <td className="py-2 px-4 border-b border-gray-300">M + P</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Cursor Down Block
              </td>
              <td className="py-2 px-4 border-b border-gray-300">M + N</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Move Cursor to Line Start
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + A</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Move Cursor to Line End
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + E</td>
            </tr>
            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                Selection
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Right with Selection
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + F + CMD
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Left with Slection
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + B + CMD
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Up with Section
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + CMD + P
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Down with Section
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + CMD + N
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                cursorEndSelect
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + CMD + E
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                cursorStartSelect
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + CMD + A
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                cursorRightWordSelect
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + CMD + Option + F
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                cursorLeftWordSelect
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + CMD + Option + B
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                cursorTopBlockSelect
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + CMD + Option + P
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                cursorBottomBlockSelect
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + CMD + Option + N
              </td>
            </tr>
            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                {' '}
                Scroll
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Liner Scroll Up with Cursor
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + U</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Liner Scroll Down with Cursor
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + D</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">Scroll Up</td>
              <td className="py-2 px-4 border-b border-gray-300">^ + V</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Scroll Down
              </td>
              <td className="py-2 px-4 border-b border-gray-300">Option + V</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Scroll to Top
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-x + ^-[</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Scroll to Bottom
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-x + ^- ]</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Scroll to Center
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-x + L</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Go To Line Number
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + L</td>
            </tr>
            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                {' '}
                Code Edit
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                delete single charchtar
              </td>
              <td className="py-2 px-4 border-b border-gray-300">Delete</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                delete front single charchtar
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + O</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">Copy</td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + C</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">Copy path</td>
              <td className="py-2 px-4 border-b border-gray-300">
                Shift + CMD + C
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">Paste</td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + V</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Insert line Above(VSCode)
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + CMD + Enter
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Delete matched bracket or tag
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-x ^-m</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Cut All Left
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + W</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Cut All Right
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + K</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Open refactor menu selected code
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + T</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Rename selected symbol
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + R</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Close any tool window
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-x ^-c</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Wrapping selected HTML Tag
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                select children elements → ^ + S
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Delete Pararent HTML Tag(preserve children)(WebStorm)
              </td>
              <td className="py-2 px-4 border-b border-gray-300">option + D</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Delete Pararent HTML Tag with Diff &amp; comformation(preserve
                children)(WebStorm)
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-x ^-r</td>
            </tr>
            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                {' '}
                Find
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Find text in current single file
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + F</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Find in Project or any Folder
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                CMD + Shift + F
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Replace text in current single file
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + R</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Replace intext in whole project or any folder
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                CMD + Shift + R
              </td>
            </tr>

            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                Split Editor Window
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Split RIght
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-x 3</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">Split Down</td>
              <td className="py-2 px-4 border-b border-gray-300">^-x 2</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Close All Split Window
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-x 1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Move Focus Window
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-x o</td>
            </tr>

            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                Code Jump
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Go to Definition
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + B</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Go to Type declaration
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + T</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Go to Matching Pair Brace/Bracket
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + M</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                prev code jump history
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + [</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                next code jump history
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + ]</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Next HighLight Symbol
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + G</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Prev HighLight Symbol
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                Shift + CMD + G
              </td>
            </tr>

            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                {' '}
                IntelliSense
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Show IntelliSense suggestion popup
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + I</td>
            </tr>

            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                {' '}
                Folding
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Expand Folding
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + =</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Collaspse Folding
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + -</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">Expand All</td>
              <td className="py-2 px-4 border-b border-gray-300">
                CMD + ^ + =
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Collaspse All
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                CMD + ^ + -
              </td>
            </tr>
            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                {' '}
                File Explorer
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Open/Focus Explorer
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + 1</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Focus Editor
              </td>
              <td className="py-2 px-4 border-b border-gray-300">ESC</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">New File</td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + N</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">New Folder</td>
              <td className="py-2 px-4 border-b border-gray-300">^ + D</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">Rename</td>
              <td className="py-2 px-4 border-b border-gray-300">^ + R</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">Delete</td>
              <td className="py-2 px-4 border-b border-gray-300">Delete</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Copy Relative File Path
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                CMD + Shift + C
              </td>
            </tr>

            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                {' '}
                Open Command
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Command Palette
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + P</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Open by filename
              </td>
              <td className="py-2 px-4 border-b border-gray-300">Cmd + O</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Go to Symbol
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                CMD + Shift + O
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Show Context Menu
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-C ^- C</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Show recent files
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + E</td>
            </tr>

            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                Git
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Show Git Blame
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-G ^-B</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Show Git History
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-G ^-H</td>
            </tr>

            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                {' '}
                Multiple Cursor
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                {' '}
                Add or Remove caret
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                Option + Click
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Clone Cursor Above
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                Option + CMD + ↑
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Clone Cursor Bellow
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                Option + CMD + ↓
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Vertical cursor fillin
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                CMD + Shift + mouse coursor(VSCode)
              </td>
            </tr>

            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                Copilot
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Show next copilot suggestion
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + ]</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Show prev copilot suggestion
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + [</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Toggle Ename/Disable copilot
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^ + ;</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Hide Completetion in Editor
              </td>
              <td className="py-2 px-4 border-b border-gray-300">ESC</td>
            </tr>

            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                {' '}
                VSCode
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Reload Window
              </td>
              <td className="py-2 px-4 border-b border-gray-300">^-x ^-R</td>
            </tr>

            <tr>
              <td className="py-3 border-b border-gray-300 font-bold text-xl text-right">
                {' '}
                Cursor AI Editor
              </td>
              <td className="border-b border-gray-300"></td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Open Chat Tab
              </td>
              <td className="py-2 px-4 border-b border-gray-300">CMD + \</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">
                Close Chat Tab
              </td>
              <td className="py-2 px-4 border-b border-gray-300">
                ^ + CMD + \
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SimpleLayout>
  )
}
