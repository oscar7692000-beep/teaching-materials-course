# Git & GitHub 版本控制：軟體工程與團隊協作基礎

---

## 單元一：版本控制與 Git 基礎

### 1.1 什麼是版本控制？
版本控制 (Version Control) 就像遊戲中的「存檔點」。當我們在編寫程式碼或撰寫報告時，常面臨「修改錯誤想回到上一版」或「多人協作檔案被覆蓋」的悲劇。版本控制系統能幫我們詳細記錄每次變更的細節、作者與時間，並能帶我們隨時回到過去的任一個歷史節點。

### 1.2 Git 與 GitHub 的差別
* **Git (本地版本控制軟體)**：安裝在你的本機電腦上的軟體，負責記錄檔案變更、管理分支與合併。離線也可以完全正常使用，不需要網路。
* **GitHub (雲端代管平台)**：將你的 Git 本地儲存庫備份到雲端的網站平台。提供網頁圖形介面，強大的多人協作、Pull Request 審查與 Issue 討論區。

### 1.3 初始設定
安裝 Git 後，必須在命令列輸入以下指令，設定你的簽名身分：
```bash
git config --global user.name "你的名字"
git config --global user.email "你的Email@example.com"
```

---

## 單元二：Git 三大區域與基本指令

### 2.1 Git 三大區域
Git 的變更管理圍繞著三個核心區域：工作目錄、暫存區、本地儲存庫。
* **工作目錄 (Working Directory)**：你實際在硬碟上看到、修改程式碼檔案的地方。
* **暫存區 (Staging Area)**：提交前的「購物車」。你在這裡挑選哪些改動要納入下一個版本。
* **本地儲存庫 (Repository)**：提交後的永久快照，存存放於隱藏的 `.git` 資料夾中。

### 2.2 常用基本指令
在資料夾下開啟終端機，執行以下核心流程：
```bash
git init                  # 初始化儲存庫 (只需執行一次)
git status                # 檢查目前檔案狀態 (Untracked, Modified, Staged)
git add hello.txt         # 將檔案加入暫存區 (購物車)
git commit -m "feat: 新增首頁"  # 提交變更，建立永久快照歷史
```

---

## 單元三：忽略檔案與復原變更

### 3.1 忽略檔案
在專案中，並非所有檔案都應該上傳版控。例如記錄資料庫密碼的 `.env` 或系統編譯產生的 `*.exe`、日誌 `*.log` 等。我們可以在專案根目錄建立一個 `.gitignore` 檔案，將要忽略的規則寫入其中。例如：
```
# .gitignore 範例
*.log
.env
node_modules/
```

### 3.2 復原與撤銷操作
當我們改錯程式碼時，Git 提供多個時光機指令：
* `git restore <檔名>`：放棄目前工作目錄的修改，回到上次 Commit 狀態（不可逆）。
* `git restore --staged <檔名>`：將檔案從暫存區移回工作目錄（取消暫存）。
* `git reset --soft HEAD~1`：撤銷上一次 commit，但保留修改的內容，以便重新調整後再次提交。
* `git commit --amend`：補救上一次 commit 內容或修改提交訊息。
* `git stash` & `git stash pop`：臨時儲存工作進度並在事後恢復。

---

## 單元四：Git 分支與衝突解決

### 4.1 分支平行宇宙
分支 (Branch) 讓開發者可以在獨立的平行宇宙中實驗，不影響主線 `main`：
```bash
git branch feature-login    # 建立名為 feature-login 的分支
git switch feature-login    # 切換到該分支
git switch -c feature-list  # 建立並直接切換至新分支
git merge feature-login     # (在 main 分支下) 合併 feature-login
```

### 4.2 手動排除合併衝突 (Merge Conflict)
當兩個人同時改了同一個檔案同一行，Git 在 merge 時會停止合併並報衝突。衝突標記格式如下：
```javascript
<<<<<<< HEAD
console.log("本地 main 分支修改");
=======
console.log("遠端 feature 分支修改");
>>>>>>> feature-branch
```
**解決衝突步驟**：
1. 開啟衝突檔案，手動刪除衝突標記並決定要保留哪些程式碼。
2. 執行 `git add <檔案>` 標記已解決。
3. 執行 `git commit` 完成合併提交。

---

## 單元五：GitHub 雲端協作、Pages 與 Actions

### 5.1 推送與拉取
```bash
git remote add origin https://github.com/帳號/專案.git # 關聯遠端庫
git push -u origin main                              # 推送本地提交並設定上游
git clone https://github.com/帳號/專案.git            # 下載遠端專案到本機
git pull                                             # 拉取遠端最新變更並合併
```

### 5.2 協作核心：Pull Request (PR)
在團隊協作中，我們不會直接將程式碼推送到 `main` 分支。而是將自己的功能分支推送到 GitHub，並發起 **Pull Request (PR)**。團隊成員會進行 **Code Review (程式碼審查)**，提供回饋或批准合併。

此外，GitHub 還提供了 **GitHub Pages** 免費靜態架站託管，以及 **GitHub Actions** 自動化 CI/CD（每次推送自動執行測試與部署），是建構現代網頁與發布應用的利器。
