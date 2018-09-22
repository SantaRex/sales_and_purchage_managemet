### How Contribute

- 1. Frok the repository
- 2. Clone your virsion of repository to your local machine
	``` git clone <url of your repo > ```
- 3. Add upstream ``` git remote add upstream https://github.com/Mofiqul/sales_and_purchage_managemet.git ```
- 4. Verify that remote is added ``` git remote -v ```
- 5. Collect the latest changes from upstream 
	``` 
	git fetch upstream
	git checkout master
	git merge upstream/master
	npm install
	``` 
- 6. Make changes and test
- 7. Add all the changes ``` git add --all``` 
- 8. Commit to your respository ``` git commit -m "your comment" ```
- 9. Push changes to your repository ``` git push```
- 10. Make a pull request from your repository

#### Please make sure before anything you change you have the latest changes from upstream, if not do 
```
git fetch upstream
git checkout master
git merge upstream/master
npm install
```