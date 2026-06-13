/* teaching_materials/app.js */

// ==========================================
// 1. 簡報資料庫 (Slide Data)
// ==========================================
const slidesData = {
  obsidian: [
    {
      type: "cover",
      title: "Obsidian 第二大腦",
      subtitle: "高中/國中版數位學習與知識管理指南",
      image: "obsidian_cover.png"
    },
    {
      type: "text",
      title: "你的大腦不是硬碟",
      bullets: [
        "大腦擅長「思考與聯想」，不擅長「記憶細節」",
        "人腦就像記憶體 (RAM) — 容量有限，斷電就忘，且受遺忘曲線影響",
        "與其拼命死記硬背，不如建立穩健的「外部系統」",
        "建立第二大腦，能有效減輕腦部負擔，釋放深度思考的創造力"
      ]
    },
    {
      type: "text",
      title: "什麼是第二大腦與 CODE 法則？",
      bullets: [
        "第二大腦是個人化的數位思考外掛與系統，幫助我們管理知識與生活",
        "**CODE 法則的四個步驟**：",
        "  - **Capture (捕捉)**: 快速記錄有價值的靈感與課堂資料",
        "  - **Organize (整理)**: 將收集來的資訊分類歸檔，便於未來存取",
        "  - **Distill (萃取)**: 提煉文章或課堂的精華重點與核心觀念",
        "  - **Express (表達)**: 整合所學，產出期末報告、簡報或作文"
      ]
    },
    {
      type: "text",
      title: "Obsidian 的三大核心堅持",
      bullets: [
        "**1. 本地優先 (Local-first)**",
        "  - 所有筆記檔案直接儲存在你的本機電腦，安全、私密且完全離線可用",
        "**2. 純文字檔案 (Markdown)**",
        "  - 筆記採用標準的 `.md` 格式，不用擔心軟體倒閉，50 年後依然能打開",
        "**3. 雙向連結 (Networked)**",
        "  - 筆記之間能互相串連，模擬大腦神經元，以網狀連結取代古板的樹狀資料夾"
      ]
    },
    {
      type: "comparison",
      title: "主流筆記工具大比拼",
      col1_title: "Obsidian (推薦選擇)",
      col1_bullets: [
        "完全免費且可離線使用",
        "雙向連結與視覺化知識圖譜",
        "檔案存在本地，完全擁有自主權",
        "大量開源社群外掛，可任意擴充功能"
      ],
      col2_title: "其他筆記軟體",
      col2_bullets: [
        "Notion: 資料庫功能強大，但過於複雜且必須連網",
        "Evernote: 封閉格式、歷史冗長，且收費營運面臨挑戰",
        "Apple Notes: 功能極簡，不適合做跨領域知識的關聯"
      ]
    },
    {
      type: "text",
      title: "開始第一步：建立 Vault",
      bullets: [
        "**什麼是 Vault (儲存庫)？**",
        "  - 在 Obsidian 中，一個 Vault 就是電腦上的一個一般資料夾",
        "**建立步驟**：",
        "  - 前往官網 `https://obsidian.md` 下載安裝檔",
        "  - 打開後切換成繁體中文語言",
        "  - 點擊「建立新儲存庫」，命名為「我的學習筆記」",
        "  - 選擇放在桌面或文件等您容易找到的位置"
      ]
    },
    {
      type: "text",
      title: "Markdown 101：基礎排版語法",
      bullets: [
        "Markdown 讓您不需要使用滑鼠點擊工具列，只靠鍵盤符號就能排版：",
        "  - **標題**：使用 `#` 加上空格，`#` 越多標題越小。例如：",
        "    - `# 一級標題` (文章主標題)",
        "    - `## 二級標題` (章節大標)",
        "    - `### 三級標題` (小節標題)",
        "  - **粗體**：在文字前後包覆 `**`，例如：`**重要**` ➡ **重要**",
        "  - **斜體**：在文字前後包覆 `*`，例如：`*強調*` ➡ *強調*",
        "  - **刪除線**：在文字前後包覆 `~~`，例如：`~~寫錯的內容~~`"
      ]
    },
    {
      type: "text",
      title: "Markdown 102：條理清單與任務清單",
      bullets: [
        "清單能幫助筆記化繁為簡：",
        "  - **無序清單 (圓點)**：使用 `-` 加空格。例如：`- 蘋果`",
        "  - **有序清單 (數字)**：使用 `1.` 加空格。例如：`1. 第一步`",
        "  - **縮排**：按 `Tab` 可以將列表縮排，按 `Shift + Tab` 可以縮回上一層",
        "  - **任務清單 (打勾待辦)**：使用 `- [ ]` (未完成) 與 `- [x]` (已完成)",
        "    - *小技巧*：按 `Ctrl + Enter` 可在編輯時快速切換任務打勾狀態"
      ]
    },
    {
      type: "text",
      title: "Markdown 103：引用與 Callout",
      bullets: [
        "**引用區塊**：在開頭輸入 `>` 代表引用名言。例如：`> 知識就是力量。`",
        "**Callout 彩色提示框**：Obsidian 特有的精美排版框：",
        "  - `> [!NOTE]` ➡ 藍色一般提示框",
        "  - `> [!WARNING]` ➡ 黃色警告框",
        "  - `> [!TIP]` ➡ 綠色技巧提示框",
        "  - `> [!DANGER]` ➡ 紅色危險標記框",
        "**水平分隔線**：輸入三個減號 `---` 即可產生一條水平線切分版面"
      ]
    },
    {
      type: "text",
      title: "Markdown 104：程式碼與表格",
      bullets: [
        "**行內程式碼**：使用單個反引號包裹，如 `ipconfig`",
        "**多行程式碼區塊**：使用三個反引號包裹，並在開頭標註程式語言：",
        "  - 例如寫 ```python ... ``` 會自動開啟 Python 的語法高亮 (彩色字)",
        "**表格整理**：",
        "  - 用 `|` 區隔直欄，第二行使用 `|---|---|` 來定義表格頭",
        "  - 例如：`| 姓名 | 科目 | 分數 |`",
        "  - 編輯時按 `Tab` 會自動建立並跳到下一格，非常便利"
      ]
    },
    {
      type: "divider",
      title: "單元一：Zettelkasten 卡片盒筆記法"
    },
    {
      type: "content",
      title: "卡片盒筆記法：三大黃金原則",
      bullets: [
        "**1. 原子化原則 (Atomicity)**",
        "  - 一張卡片只記錄一個概念，拆得夠小才能靈活連結與組合",
        "**2. 用自己的話重寫**",
        "  - 拒絕直接複製貼上課本內容，用自己的話寫下理解，才能真正吸收",
        "**3. 強制連結**",
        "  - 每張卡片都必須與其他卡片產生連結，沒有連結的卡片就像孤島"
      ],
      image: "obsidian_zettelkasten.png"
    },
    {
      type: "text",
      title: "雙向連結：先連結，後補內容",
      bullets: [
        "**什麼是雙向連結？**",
        "  - 在 Obsidian 中使用 `[[連結目標]]` 建立關係",
        "  - A 連結到 B 時，B 的反向連結 (Backlinks) 會自動提示 A 引用了它",
        "**先連結，後補內容 (Placeholder Links)**：",
        "  - 當你寫筆記想到新概念但尚未建立該筆記時，先打 `[[新概念]]`",
        "  - 系統會呈現虛線連結，讓你不打斷手上的寫作思緒",
        "  - 事後按住 `Ctrl` 點擊虛線，即可瞬間開啟該新筆記補齊內容"
      ]
    },
    {
      type: "comparison",
      title: "Zettelkasten 三種卡片類型",
      col1_title: "隨手卡 & 文獻卡",
      col1_bullets: [
        "**靈感卡 (Fleeting Notes)**:",
        "  - 隨手記下的點子、課堂靈感",
        "  - 壽命只有 24 小時，必須定期清空或整理",
        "**文獻卡 (Literature Notes)**:",
        "  - 閱讀課本、文章或聽講的摘要",
        "  - 用自己的話記錄大意，並標明出處來源"
      ],
      col2_title: "永久卡 (Permanent Notes)",
      col2_bullets: [
        "**永久卡 (Permanent Notes)**:",
        "  - 經過整理思考後形成的完整觀點",
        "  - 可以獨立存在，不需依附其他背景資料",
        "  - 內含 `[[雙向連結]]` 與明確的個人思維",
        "  - 是您第二大腦知識體系的核心磚瓦"
      ]
    },
    {
      type: "divider",
      title: "單元二：PARA 整理心法"
    },
    {
      type: "content",
      title: "P (Projects) 專案與 A (Areas) 領域",
      bullets: [
        "**P: Projects (專案)**",
        "  - 有明確目標、具體成果且有截止日期的任務",
        "  - 學生範例：🎒 歷史期末報告 (12/25交)、學測數學複習進度表",
        "**A: Areas (領域)**",
        "  - 需要長期維持、沒有明確截止日期的日常生活領域",
        "  - 學生範例：📚 數學科學習、🏀 籃球社訓練、❤️ 個人健康管理"
      ],
      image: "obsidian_para.png"
    },
    {
      type: "comparison",
      title: "R (Resources) 資源與 A (Archives) 封存",
      col1_title: "R: Resources (資源)",
      col1_bullets: [
        "你感興趣、未來可能派上用場的資訊主題",
        "沒有時間壓力，是個人專屬的素材資源庫",
        "學生範例：",
        "  - 🎮 遊戲設計學習資料",
        "  - 🌌 業餘天文學新知",
        "  - 🎬 推薦閱讀書單與電影清單"
      ],
      col2_title: "A: Archives (封存)",
      col2_bullets: [
        "已經完成、暫停或不再使用但不能刪除的檔案",
        "封存是為了保持工作環境的清爽，不代表刪除",
        "學生範例：",
        "  - ✅ 八年級國文科筆記 (已考完)",
        "  - ⏸️ 暫時中止的社團活動企劃",
        "  - 📦 過去做完的段考考卷分級掃描檔"
      ]
    },
    {
      type: "divider",
      title: "單元三：MOC 內容地圖"
    },
    {
      type: "content",
      title: "MOC：解決蜘蛛網混亂的地圖",
      bullets: [
        "**什麼是 MOC (Map of Content)？**",
        "  - 當筆記累積到 200 篇以上，關係圖 (Graph) 會變成混亂的蜘蛛網",
        "  - MOC 是一張「地圖筆記」，專門用來整理、導覽某個主題的相關連結",
        "  - 就像一本書的「目錄」，能幫助你重新整理知識結構",
        "  - 例如建立「數學 MOC」，內含「代數」、「幾何」等子筆記連結"
      ],
      image: "obsidian_moc.png"
    },
    {
      type: "text",
      title: "實作 MOC 的五個步驟",
      bullets: [
        "當某個主題的筆記數量累積到 5 篇以上時，即可開始建立 MOC：",
        "  - **步驟 1**：建立一篇新筆記，命名為 `MOC：主題名稱` (如 `MOC：高中物理`)",
        "  - **步驟 2**：在 MOC 中列出該主題的關鍵概念或章節大綱",
        "  - **步驟 3**：將大綱中的各概念文字套用 `[[雙向連結]]` 連結至對應筆記",
        "  - **步驟 4**：在每個連結後面補上一句簡短說明，幫助回憶",
        "  - **步驟 5**：將這張 MOC 加入「書籤 (Bookmarks)」，以便每天快速查閱"
      ]
    },
    {
      type: "text",
      title: "每日筆記：思緒的候車室",
      bullets: [
        "**Daily Notes (每日筆記)** 是收集想法的最佳入口：",
        "  - 啟用核心外掛後，點擊按鈕即可自動建立今天日期的筆記 (如 `2026-06-13.md`)",
        "  - 每天上課的靈感、隨手記錄的待辦、當天的心情都可以丟在這裡",
        "  - 搭配 **QuickAdd** 可以設定快捷鍵，免開筆記直接往 Daily Note 追加文字",
        "  - **核心觀念**：每日筆記是思緒的「候車室」，不是儲藏室！每天睡前應花 5 分鐘將裡面的資訊歸檔到對的資料夾或整理成永久卡。"
      ]
    },
    {
      type: "divider",
      title: "單元四：畫布 Canvas 與視覺思考"
    },
    {
      type: "content",
      title: "Canvas：無限大的視覺化白板",
      bullets: [
        "**Canvas (畫布) 功能**：",
        "  - Obsidian 內建的無限白板，讓你用視覺化方式整理知識",
        "  - 可自由將已寫好的筆記卡片、獨立文字框、圖片甚至網址拉入畫布",
        "  - 使用箭頭連線標示概念之間的因果、邏輯關係",
        "  - 非常適合用在：歷史事件時間線排列、腦力激盪、考前心智圖複習"
      ],
      image: "obsidian_canvas.png"
    },
    {
      type: "text",
      title: "學生專屬工作流與備份策略",
      bullets: [
        "**每日學習工作流**：",
        "  - **上課時** ➡ 使用 Daily Notes 快速記下 Fleeting Notes 或文獻卡",
        "  - **下課當天** ➡ 將雜亂的筆記用自己的話整理成永久卡",
        "  - **週末** ➡ 建立雙向連結，更新該科目的 MOC 學習地圖",
        "  - **段考前** ➡ 打開 MOC 與 Canvas 白板，進行系統化總複習",
        "**安全備份**：使用 **Obsidian Git** 外掛，每天自動將筆記上傳備份至 GitHub，再也不怕電腦壞掉或硬碟受損！"
      ]
    },
    {
      type: "text",
      title: "今日開始，打造你的第二大腦",
      bullets: [
        "知識不是力量，**整理過且能夠靈活連結的知識**才是力量！",
        "今日回家就做這三件事：",
        "  - **1. 下載安裝 Obsidian** 並建立名為「我的學習筆記」的 Vault",
        "  - **2. 建立 PARA 四大資料夾結構**",
        "  - **3. 寫下第一篇課堂筆記，並建立第一個雙向連結**",
        "十年後的你，會感謝今天開始整理的自己。祝您學習愉快！🎉"
      ]
    }
  ],
  git: [
    {
      type: "cover",
      title: "Git & GitHub 版本控制",
      subtitle: "高中/國中版軟體工程與多人協作基礎",
      image: "github_cover.png"
    },
    {
      type: "text",
      title: "什麼是版本控制？電玩的存檔",
      bullets: [
        "**電玩遊戲的存檔**：玩遊戲時，我們可以隨時存檔。改錯了、玩壞了，隨時可以讀取存檔回到過去。",
        "**沒有版本控制的悲劇**：",
        "  - 報告名稱變成：「報告_最終版.doc」、「報告_真的最終版.doc」、「報告_打死不改最終版.doc」",
        "**版本控制系統 (VCS) 的優勢**：",
        "  - 1. **詳細記錄**：誰在什麼時候修改了檔案的哪一行，一目了然",
        "  - 2. **時光機**：隨時可以復原到過去的任一個歷史版本",
        "  - 3. **團隊協作**：多人修改同一個檔案時，系統會智慧合併"
      ]
    },
    {
      type: "text",
      title: "Git 與 GitHub：兩者大不同",
      bullets: [
        "許多初學者會把這兩者搞混，其實它們是完全不同的東西：",
        "**Git (本地版本控制軟體)**：",
        "  - 安裝在你的本機電腦上的軟體，負責記錄檔案變更、管理分支與合併",
        "  - 離線也可以完全正常使用，不需要網路",
        "**GitHub (雲端代管平台)**：",
        "  - 將你的 Git 本地儲存庫備份到雲端的網站平台",
        "  - 提供網頁圖形介面，強大的多人協作、Pull Request 審查與 Issue 討論區"
      ]
    },
    {
      type: "text",
      title: "在電腦上安裝 Git",
      bullets: [
        "**Windows 使用者**：",
        "  - 前往官網 `https://git-scm.com` 下載 Windows 安裝檔",
        "  - 安裝時大多保持預設設定，預設編輯器建議選擇 VS Code",
        "**macOS 使用者**：",
        "  - 打開「終端機」(Terminal)，輸入 `git --version`",
        "  - 若未安裝，系統會自動跳出提示引導你安裝 Xcode Command Line Tools",
        "**驗證安裝**：",
        "  - 在命令提示字元/終端機輸入 `git --version`，正確顯示版本號即成功"
      ]
    },
    {
      type: "text",
      title: "設定你的 Git 全域身分",
      bullets: [
        "安裝好 Git 後，第一件事是告訴 Git 你是誰。每次提交版本時，Git 都會記錄這些資訊：",
        "在終端機輸入以下指令：",
        "  - `git config --global user.name \"你的名字\"` (建議使用英文名稱)",
        "  - `git config --global user.email \"你的Email@example.com\"`",
        "**注意事項**：",
        "  - `--global` 表示這台電腦上所有的 Git 專案都會預設套用這個身分",
        "  - Email 建議填寫與 GitHub 帳號相同的 Email，以利日後將貢獻正確連結",
        "  - 輸入 `git config --global --list` 可以檢查目前設定"
      ]
    },
    {
      type: "divider",
      title: "單元一：Git 核心架構與基本指令"
    },
    {
      type: "content",
      title: "Git 三大區塊工作流",
      bullets: [
        "Git 版本控制的精髓在於這三個區域的切換：",
        "**1. 工作目錄 (Working Directory)**",
        "  - 你在電腦上實際編輯程式碼、新增或刪除檔案的地方",
        "**2. 暫存區 (Staging Area)**",
        "  - 準備要結帳的「購物車」。你在這裡挑選哪些檔案要納入下個版本",
        "**3. 本地儲存庫 (Repository)**",
        "  - 已經完成提交的永久快照歷史，存放在隱藏的 `.git` 資料夾中"
      ],
      image: "git_areas.png"
    },
    {
      type: "text",
      title: "初始化儲存庫與狀態檢查",
      bullets: [
        "**`git init`：初始化專案**",
        "  - 在你要版控的資料夾下輸入 `git init`，會自動建立 `.git` 資料夾",
        "  - *提醒*：一個專案只需初始化一次，不要手動修改隱藏的 `.git` 資料夾",
        "**`git status`：檢查狀態**",
        "  - 告訴你目前工作目錄與暫存區的檔案狀況：",
        "    - **Untracked (未追蹤)**: Git 還不認識的新檔案",
        "    - **Modified (已修改)**: 檔案被改動但尚未加入暫存區",
        "    - **Staged (已暫存)**: 已加入暫存區，準備好提交的檔案"
      ]
    },
    {
      type: "text",
      title: "將變更提交入庫：Add & Commit",
      bullets: [
        "這是 Git 日常最核心的「兩段式提交」操作：",
        "**步驟一：放入暫存區 (Staging)**",
        "  - `git add hello.txt`: 將指定檔案的修改放入購物車",
        "  - `git add .` (或 `git add -A`): 將目前所有修改一次塞入購物車",
        "**步驟二：提交保存 (Commit)**",
        "  - `git commit -m \"新增首頁功能\"`",
        "  - 這會將暫存區的檔案打包成一個永久的版本快照",
        "  - `-m` 後面是提交訊息，必須簡述這版「做了什麼修改」"
      ]
    },
    {
      type: "text",
      title: "如何寫出好的 Commit 訊息",
      bullets: [
        "好的 Commit 訊息是專案維護的關鍵，建議遵守 **Conventional Commits** 規範：",
        "格式：`<type>: <description>` (類型: 簡短說明)",
        "**常用類型 (Type)**：",
        "  - `feat`: 新增功能 (Feature)",
        "  - `fix`: 修正錯誤 (Bug Fix)",
        "  - `docs`: 修改文件或 README",
        "  - `style`: 程式碼格式調整 (空格、縮排等，不影響執行結果)",
        "  - `refactor`: 重構程式碼 (改寫邏輯，但功能不變)",
        "好的範例：`feat: 整合 Google OAuth 登入功能`"
      ]
    },
    {
      type: "text",
      title: "檢視歷史紀錄：Log & Diff",
      bullets: [
        "**`git log`：翻閱版本紀錄**",
        "  - 列出過去所有的 Commit 歷史、作者、日期與提交訊息",
        "  - `git log --oneline`: 精簡版歷史，一行顯示一筆提交",
        "  - `git log -3`: 只顯示最後 3 筆資料",
        "**`git diff`：比較檔案差異**",
        "  - 查看檔案修改了哪些具體程式碼行 (綠色 `+` 代表新增，紅色 `-` 代表刪除)",
        "  - `git diff`: 查看工作目錄與暫存區的差異",
        "  - `git diff --staged`: 查看暫存區與上次提交版本間的差異"
      ]
    },
    {
      type: "text",
      title: "忽略檔案 .gitignore",
      bullets: [
        "並非所有檔案都該上傳。有些檔案（如密碼檔、大型套件、編譯暫存檔）應排除在版控之外：",
        "  - 在專案根目錄建立名為 `.gitignore` 的檔案",
        "  - 在裡面逐行寫入要忽略的檔案名稱或萬用規則：",
        "    - `*.log` (忽略所有日誌檔)",
        "    - `.env` (忽略環境變數密碼檔)",
        "    - `node_modules/` (忽略前端套件依賴資料夾)",
        "  - **注意事項**：已經被 Git 追蹤的檔案不受此檔影響。必須先執行 `git rm --cached <檔名>` 解除追蹤後，才會被 ignore。"
      ]
    },
    {
      type: "text",
      title: "時光機復原變更：Restore & Reset",
      bullets: [
        "**`git restore <檔名>`：放棄修改**",
        "  - 放棄工作目錄中未暫存的修改，回到上次提交的狀態（此操作無法復原！）",
        "**`git restore --staged <檔名>`：取消暫存**",
        "  - 將檔案從暫存區拿出來，回復成 modified 狀態 (等同取消 `git add`)",
        "**`git reset HEAD~1`：撤銷提交**",
        "  - `git reset --soft HEAD~1`: 撤銷上一次 commit，但保留檔案修改於暫存區",
        "  - `git reset --hard HEAD~1`: 徹底抹除上一次 commit 與所有變更 (危險！)"
      ]
    },
    {
      type: "text",
      title: "Commit 補救與 Stash 暫存技巧",
      bullets: [
        "**`git commit --amend`：補救最後一次提交**",
        "  - 如果剛 commit 完發現訊息寫錯，或少 add 了一個檔案，可重新 `git add` 後輸入 `git commit --amend --no-edit` 合併入上一次提交",
        "**`git stash`：臨時儲存工作進度**",
        "  - 當你手頭功能寫到一半，突然要切去別的分支修正緊急錯誤時：",
        "    - 輸入 `git stash` 暫存目前修改，讓工作目錄回到乾淨狀態",
        "    - 修完錯誤後，切回原分支輸入 `git stash pop` 還原進度繼續寫"
      ]
    },
    {
      type: "divider",
      title: "單元二：Git 分支與平行宇宙開發"
    },
    {
      type: "content",
      title: "平行宇宙：Branch, Switch & Merge",
      bullets: [
        "分支 (Branch) 讓開發者可以在獨立的平行宇宙中實驗，不影響主線 `main`：",
        "**分支常用指令**：",
        "  - `git branch`: 列出目前本地的所有分支",
        "  - `git branch <新分支名>`: 建立新分支",
        "  - `git switch <分支名>` (舊版為 `checkout`): 切換至指定分支",
        "  - `git switch -c <新分支名>`: 建立分支並直接切換過去",
        "  - `git merge <分支名>`: 將指定分支合併回目前分支"
      ],
      image: "git_branches.png"
    },
    {
      type: "text",
      title: "手動解決合併衝突 (Merge Conflict)",
      bullets: [
        "**衝突產生的原因**：當兩個分支修改了同一個檔案的同一個區域，Git 合併時不知道聽誰的，就會停下來請你手動排除。",
        "**衝突檔案標記格式**：",
        "  - `<<<<<<< HEAD` (你目前分支的內容)",
        "  - `=======` (分隔線)",
        "  - `>>>>>>> feature-branch` (要合併進來的內容)",
        "**排除步驟**：",
        "  - 1. 開啟衝突檔案，手動刪除衝突標記並決定要保留哪些程式碼",
        "  - 2. `git add <檔名>` 代表衝突已解決",
        "  - 3. 輸入 `git commit` 完成合併提交"
      ]
    },
    {
      type: "comparison",
      title: "分支策略：Git Flow vs GitHub Flow",
      col1_title: "Git Flow (嚴謹、固定發布)",
      col1_bullets: [
        "主分支為 `main` (正式版) 與 `develop` (開發版)",
        "開發功能時從 `develop` 分出 `feature/` 分支",
        "準備發行時使用 `release/`，修 bug 使用 `hotfix/`",
        "結構清晰但流程繁雜，適合大型專案與有固定產品發行週期的團隊"
      ],
      col2_title: "GitHub Flow (輕量、持續部署)",
      col2_bullets: [
        "只有一條主要分支 `main`，且隨時保持可部署狀態",
        "要開發功能時直接從 `main` 分出 `feature-xxx` 分支",
        "開發完成推送至雲端，發起 Pull Request (PR) 進行代碼審查",
        "審查通過直接合併回 `main` 並自動部署，流程極簡"
      ]
    },
    {
      type: "divider",
      title: "單元三：GitHub 雲端代管與團隊協作"
    },
    {
      type: "content",
      title: "與 GitHub 連線：Push & Pull",
      bullets: [
        "將本地代碼上傳雲端，或從雲端下載專案：",
        "**常用指令**：",
        "  - `git remote add origin <GitHub網址>`: 將本地儲存庫關聯至遠端倉庫",
        "  - `git push -u origin main`: 首次推送 main 分支並設定 upstream，之後只需打 `git push`",
        "  - `git clone <網址>`: 下載並複製 GitHub 上的專案到本地電腦",
        "  - `git pull`: 從遠端更新最新提交並自動合併到本地"
      ],
      image: "github_collaboration.png"
    },
    {
      type: "text",
      title: "安全連線設定：SSH 與 PAT",
      bullets: [
        "GitHub 已停用傳統密碼推送，目前必須使用以下兩種安全方式驗證：",
        "**1. SSH 金鑰連線 (免密碼，最推薦)**",
        "  - 在本地終端機執行 `ssh-keygen -t ed25519` 產生公私鑰對",
        "  - 將公鑰 (`.pub` 檔內容) 貼到 GitHub Settings ➡ SSH Keys 中",
        "  - 驗證成功後，即可免輸入帳密進行推送與拉取",
        "**2. Personal Access Token (PAT) 認證**",
        "  - 在 GitHub Developer Settings 產生一串 Token 代替密碼",
        "  - 可設定存取權限範圍與到期日，安全性高"
      ]
    },
    {
      type: "text",
      title: "Pull Request (PR) 與程式碼審查",
      bullets: [
        "**Pull Request (PR)** 是 GitHub 團隊協作的最核心功能：",
        "  - 當你修改完程式碼並 push 自己的分支後，在 GitHub 網頁發起 PR",
        "  - PR 是一個「請求合併通知」，向團隊展示修改的檔案 diff 差異",
        "**Code Review (程式碼審查)**：",
        "  - 團隊成員會在 PR 頁面逐行檢視代碼，並在行內留言討論與建議",
        "  - 審查通過後，管理員點擊 Merge，將分支合併回主線 `main`",
        "  - 這是確保程式碼品質與團隊知識分享的最有效流程"
      ]
    },
    {
      type: "text",
      title: "Fork 專案與 Sync 上游同步",
      bullets: [
        "參與開源專案或沒有寫入權限的 Repository 時，使用 **Fork** 流程：",
        "  - **Fork**：將別人的 Repository 複製一份到你個人的 GitHub 帳號下",
        "  - **Clone & 修改**：將你個人的 Fork 複製到本地電腦修改並 commit",
        "  - **Sync Fork**：定期將原始作者的更新同步回你的 Fork（使用 `git remote add upstream <原網址>`）",
        "  - **發送 PR**：修改完成後，發起 Pull Request 回原始專案，請求對方合併你的修改。這就是貢獻開源代碼的標準做法！"
      ]
    },
    {
      type: "text",
      title: "GitHub Actions、Pages 與 Codespaces",
      bullets: [
        "GitHub 提供了一整套開發者生態工具：",
        "  - **GitHub Pages**：完全免費！直接將你儲存庫中的靜態 HTML/CSS/JS 網站部署上線 (如個人履歷、作品集)",
        "  - **GitHub Actions (CI/CD)**：自動化工作流，在每次 push 時自動執行測試、編譯，或將網站自動部署",
        "  - **GitHub Codespaces**：在雲端運行的 VS Code 開發虛擬機，就算沒有帶電腦，用 iPad 開瀏覽器也能寫程式"
      ]
    },
    {
      type: "text",
      title: "Git 實作挑戰：開始第一步",
      bullets: [
        "Git 最好的學習方式是「實作」。今天請完成以下挑戰：",
        "  - 1. **註冊 GitHub 帳號**並啟用雙因素驗證 (2FA)",
        "  - 2. **建立特殊同名儲存庫**：新建 `你的帳號/你的帳號` 儲存庫，填寫 `README.md`，這會變成你的 GitHub 個人主頁！",
        "  - 3. **建立一個測試專案**，練習 `add` ➡ `commit` ➡ `push` 的完整流程",
        "Git 幾乎可以救回任何已提交的檔案，不要害怕輸入指令，開始動手吧！🎉"
      ]
    }
  ]
};

// ==========================================
// 2. 狀態管理 (State Management)
// ==========================================
let currentCourse = "obsidian"; // "obsidian" or "git"
let currentSlideIndex = 0;
let currentView = "portal"; // "portal", "slide", "textbook"

// ==========================================
// 3. 初始化載入 (Initialization)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  
  // 檢測網址 hash (例如 #obsidian/textbook)
  handleRouting();
  window.addEventListener("hashchange", handleRouting);
});

// ==========================================
// 4. 事件監聽設定 (Event Listeners)
// ==========================================
function setupEventListeners() {
  // Portal 大圖卡點擊
  document.getElementById("portal-obsidian").addEventListener("click", () => {
    switchCourse("obsidian", "slide");
  });
  document.getElementById("portal-git").addEventListener("click", () => {
    switchCourse("git", "slide");
  });

  // 簡報導航按鈕
  document.getElementById("slide-prev").addEventListener("click", prevSlide);
  document.getElementById("slide-next").addEventListener("click", nextSlide);
  
  // 鍵盤左右方向鍵切換簡報
  document.addEventListener("keydown", (e) => {
    if (currentView === "slide") {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight" || e.key === "Space") {
        e.preventDefault();
        nextSlide();
      }
    }
  });

  // 複製程式碼功能
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const codeBlock = e.target.nextElementSibling;
      navigator.clipboard.writeText(codeBlock.textContent).then(() => {
        showToast("程式碼已複製到剪貼簿！");
      });
    });
  });

  // 互動測驗回答
  document.querySelectorAll(".quiz-option").forEach(option => {
    option.addEventListener("click", (e) => {
      const parent = e.target.parentElement;
      // 防止重複回答
      if (parent.querySelector(".correct") || parent.querySelector(".incorrect")) return;
      
      const isCorrect = e.target.dataset.correct === "true";
      if (isCorrect) {
        e.target.classList.add("correct");
        const exp = parent.nextElementSibling;
        if (exp) exp.style.display = "block";
      } else {
        e.target.classList.add("incorrect");
        // 標記正確的那個
        const correctOpt = parent.querySelector("[data-correct='true']");
        if (correctOpt) correctOpt.classList.add("correct");
        const exp = parent.nextElementSibling;
        if (exp) exp.style.display = "block";
      }
    });
  });
}

// ==========================================
// 5. 路由管理 (Routing)
// ==========================================
function handleRouting() {
  const hash = window.location.hash;
  if (!hash || hash === "#" || hash === "#portal") {
    showView("portal");
  } else {
    const parts = hash.substring(1).split("/");
    const course = parts[0];
    const view = parts[1] || "slide";
    if (slidesData[course]) {
      switchCourse(course, view);
    } else {
      showView("portal");
    }
  }
}

function switchCourse(course, view) {
  currentCourse = course;
  currentView = view;
  
  // 設定品牌顏色主題
  const root = document.documentElement;
  if (course === "obsidian") {
    root.style.setProperty("--primary-color", "var(--obsidian-primary)");
    root.style.setProperty("--accent-color", "var(--obsidian-accent)");
    root.style.setProperty("--card-bg-glow", "var(--obsidian-card)");
  } else {
    root.style.setProperty("--primary-color", "var(--git-primary)");
    root.style.setProperty("--accent-color", "var(--git-accent)");
    root.style.setProperty("--card-bg-glow", "var(--git-card)");
  }
  
  // 更新 Logo 主題字
  document.getElementById("logo-text").textContent = course === "obsidian" ? "Obsidian 第二大腦" : "Git & GitHub 版本控制";

  showView(view);
}

function showView(view) {
  currentView = view;
  
  // 隱藏所有區域
  document.getElementById("portal-view").style.display = "none";
  document.getElementById("dashboard-view").style.display = "none";
  document.getElementById("slide-view").style.display = "none";
  document.getElementById("textbook-view-obsidian").style.display = "none";
  document.getElementById("textbook-view-git").style.display = "none";

  // 取消選單 active
  document.querySelectorAll(".menu-item").forEach(item => item.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));

  if (view === "portal") {
    document.getElementById("portal-view").style.display = "block";
    document.getElementById("logo-text").textContent = "數位自主學習教材";
  } else {
    document.getElementById("dashboard-view").style.display = "grid";
    
    // 設定 Sidebar Menu 與頂部 Nav 狀態
    const menuSlide = document.getElementById("menu-slide");
    const menuBook = document.getElementById("menu-book");
    const navSlide = document.getElementById("nav-slide");
    const navBook = document.getElementById("nav-book");

    if (view === "slide") {
      document.getElementById("slide-view").style.display = "block";
      menuSlide.classList.add("active");
      navSlide.classList.add("active");
      currentSlideIndex = 0;
      renderSlide();
    } else if (view === "textbook") {
      const tbId = currentCourse === "obsidian" ? "textbook-view-obsidian" : "textbook-view-git";
      document.getElementById(tbId).style.display = "block";
      menuBook.classList.add("active");
      navBook.classList.add("active");
    }
  }
  
  // 同步 Hash
  if (view !== "portal") {
    window.location.hash = `${currentCourse}/${view}`;
  } else {
    window.location.hash = "portal";
  }
}

// ==========================================
// 6. 簡報播放邏輯 (Slide Presentation Logic)
// ==========================================
function renderSlide() {
  const slides = slidesData[currentCourse];
  const slide = slides[currentSlideIndex];
  
  const titleEl = document.getElementById("slide-title");
  const bulletsEl = document.getElementById("slide-bullets");
  const imgArea = document.getElementById("slide-img-area");
  const contentArea = document.getElementById("slide-content-area");
  
  // 重置狀態
  titleEl.innerHTML = "";
  bulletsEl.innerHTML = "";
  imgArea.innerHTML = "";
  contentArea.className = "slide-content-area"; // 重設 class

  if (slide.type === "cover") {
    contentArea.classList.add("full-text");
    titleEl.innerHTML = slide.title;
    bulletsEl.innerHTML = `<li style="list-style:none; text-align:center; font-size:1.5rem; color:var(--accent-color); margin-top:20px;">${slide.subtitle}</li>`;
    
    // 將封面大圖放到右側
    contentArea.className = "slide-content-area";
    const img = document.createElement("img");
    img.src = `images/${slide.image}`;
    img.alt = slide.title;
    imgArea.appendChild(img);
  } 
  else if (slide.type === "divider") {
    contentArea.classList.add("divider-slide");
    titleEl.innerHTML = slide.title;
    bulletsEl.innerHTML = `<li style="list-style:none; text-align:center; font-size:1.5rem; color:rgba(255,255,255,0.8); margin-top:10px;">—— 精選教學單元 ——</li>`;
  }
  else if (slide.type === "comparison") {
    contentArea.classList.add("full-text");
    titleEl.innerHTML = slide.title;
    
    const container = document.createElement("div");
    container.className = "slide-comparison-columns";
    
    // 欄位 1
    const col1 = document.createElement("div");
    col1.className = "comparison-column";
    col1.innerHTML = `<h4>${slide.col1_title}</h4>`;
    const ul1 = document.createElement("ul");
    slide.col1_bullets.forEach(b => {
      const li = document.createElement("li");
      li.textContent = b;
      ul1.appendChild(li);
    });
    col1.appendChild(ul1);
    
    // 欄位 2
    const col2 = document.createElement("div");
    col2.className = "comparison-column";
    col2.innerHTML = `<h4>${slide.col2_title}</h4>`;
    const ul2 = document.createElement("ul");
    slide.col2_bullets.forEach(b => {
      const li = document.createElement("li");
      li.textContent = b;
      ul2.appendChild(li);
    });
    col2.appendChild(ul2);
    
    container.appendChild(col1);
    container.appendChild(col2);
    bulletsEl.appendChild(container);
  }
  else if (slide.type === "content") {
    titleEl.innerHTML = slide.title;
    slide.bullets.forEach(b => {
      const li = document.createElement("li");
      
      if (b.startsWith("    - ")) {
        li.textContent = b.substring(6);
        li.className = "level-2";
      } else if (b.startsWith("  - ") || b.startswith(" - ")) {
        li.textContent = b.startsWith("  - ") ? b.substring(4) : b.substring(3);
        li.className = "level-1";
      } else {
        li.textContent = b;
      }
      bulletsEl.appendChild(li);
    });
    
    const img = document.createElement("img");
    img.src = `images/${slide.image}`;
    img.alt = slide.title;
    imgArea.appendChild(img);
  }
  else if (slide.type === "text") {
    contentArea.classList.add("full-text");
    titleEl.innerHTML = slide.title;
    
    slide.bullets.forEach(b => {
      const li = document.createElement("li");
      if (b.startsWith("    - ")) {
        li.textContent = b.substring(6);
        li.className = "level-2";
      } else if (b.startsWith("  - ") || b.startsWith(" - ")) {
        li.textContent = b.startsWith("  - ") ? b.substring(4) : b.substring(3);
        li.className = "level-1";
      } else {
        li.textContent = b;
      }
      bulletsEl.appendChild(li);
    });
  }
  
  // 更新進度條與頁碼
  const progressPercent = ((currentSlideIndex + 1) / slides.length) * 100;
  document.getElementById("slide-progress").style.width = `${progressPercent}%`;
  document.getElementById("slide-num-text").textContent = `${currentSlideIndex + 1} / ${slides.length}`;
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderSlide();
  }
}

function nextSlide() {
  const slides = slidesData[currentCourse];
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    renderSlide();
  }
}

// ==========================================
// 7. 輔助 UI 函數 (Helper UI Functions)
// ==========================================
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}

// 全域導航函數 (HTML 點擊用)
window.goHome = () => showView("portal");
window.changeNavView = (view) => showView(view);
window.triggerPrint = () => {
  window.print();
};
