main: _config.yml
	jekyll build
watch: _config.yml
	jekyll serve --watch 
upload: main
	./UploadSite.sh
	echo "********************WARNING*********************************"
	echo "Make sure only relevant files are uploaded to your website."
	echo "It would be best to log onto your website and check this now."
	echo "********************WARNING*********************************"
clean:
	jekyll clean
