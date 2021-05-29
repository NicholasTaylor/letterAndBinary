dev-up:
	./vendor/bin/sail up & sleep 5 && ./vendor/bin/sail npm run watch && fg