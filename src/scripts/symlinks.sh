# create symlinks where they need to go

THESIS=/var/www/thesis.joel.fm/html
LASTHEAVY=/var/www/lastheavy.net/html
JOELFM=/var/www/joel.fm/html
SRC=/var/www/joel.fm/src

# ln -s $SRC/public $JOELFM/
cp $SRC/content/assets/files/joel-hawkins-torres-resume.pdf $JOELFM/
ln -s $THESIS $JOELFM/thesis
ln -s $THESIS/files/jhawkins_thesis.pdf $JOELFM/thesis.pdf
ln -s $LASTHEAVY $JOELFM/lastheavy
ln -s $JOELFM/joel-hawkins-torres-resume.pdf $JOELFM/resume.pdf
ln -s $JOELFM/joel-hawkins-torres-resume.pdf $JOELFM/resume
