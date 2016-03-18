<?php

define('EMAIL_FOR_REPORTS', '');
define('RECAPTCHA_PRIVATE_KEY', '@privatekey@');
define('FINISH_URI', 'http://');
define('FINISH_ACTION', 'message');
define('FINISH_MESSAGE', 'Thanks for filling out my form!');
define('UPLOAD_ALLOWED_FILE_TYPES', 'doc, docx, xls, csv, txt, rtf, html, zip, jpg, jpeg, png, gif');

define('_DIR_', str_replace('\\', '/', dirname(__FILE__)) . '/');
require_once _DIR_ . '/handler.php';

?>

<?php if (frmd_message()): ?>
<link rel="stylesheet" href="<?php echo dirname($form_path); ?>/formoid-solid-dark.css" type="text/css" />
<span class="alert alert-success"><?php echo FINISH_MESSAGE; ?></span>
<?php else: ?>
<!-- Start Formoid form-->
<link rel="stylesheet" href="<?php echo dirname($form_path); ?>/formoid-solid-dark.css" type="text/css" />
<script type="text/javascript" src="<?php echo dirname($form_path); ?>/jquery.min.js"></script>
<form class="formoid-solid-dark" style="background-color:#ffffff;font-size:14px;font-family:'Roboto',Arial,Helvetica,sans-serif;color:#34495E;max-width:480px;min-width:150px" method="post"><div class="title"><h2>Test de personnalité</h2></div>
	<div class="element-radio<?php frmd_add_class("radio"); ?>"><label class="title">1.	Je me fais facilement des amis ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio1"); ?>"><label class="title">2. J’ai beaucoup d’imagination ?  <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio1" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio1" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio2"); ?>"><label class="title">3. J’ai confiance aux autres ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio2" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio2" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio3"); ?>"><label class="title">4. J’accomplis les tâches avec succès <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio3" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio3" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio4"); ?>"><label class="title">5. Je me fâche facilement <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio4" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio4" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio5"); ?>"><label class="title">6. J’apprécie les grandes réceptions et réunions ? <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio5" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio5" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio6"); ?>"><label class="title">7. J’estime que l’art est important ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio6" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio6" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio9"); ?>"><label class="title">8. J’utilise et je manipule les autres pour arriver à mes fins ? <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio9" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio9" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio8"); ?>"><label class="title">9. Je n’aime pas le désordre ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio8" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio8" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio7"); ?>"><label class="title">10. Je me sens souvent triste ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio7" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio7" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio14"); ?>"><label class="title">11. J’aime prendre en main les situations et les évènements ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio14" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio14" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio13"); ?>"><label class="title">12. J’éprouve les émotions profondes et variées ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio13" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio13" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio12"); ?>"><label class="title">13. J’adore aider les autres ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio12" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio12" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio11"); ?>"><label class="title">14. Je tiens mes promesses ? <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio11" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio11" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio10"); ?>"><label class="title">15. Je trouve qu’il est difficile d’approcher les autres ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio10" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio10" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio15"); ?>"><label class="title">16. Je suis toujours occupé(e), sur la brèche ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio15" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio15" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio19"); ?>"><label class="title">17. Je préfère la diversité à la routine ? <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio19" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio19" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio18"); ?>"><label class="title">18. J’adore une bonne dispute, une bonne querelle ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio18" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio18" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio17"); ?>"><label class="title">19. Je travaille dur ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio17" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio17" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio16"); ?>"><label class="title">20. Je me laisse aller à des excès, je fais la bringue ?<span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio16" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio16" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio24"); ?>"><label class="title">21. J’adore être dans le mouvement ? <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio24" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio24" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio23"); ?>"><label class="title">22. J’aime lire des livres et des articles stimulants ? <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio23" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio23" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio22"); ?>"><label class="title">23. Je crois être meilleur(e) que les autres ? <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio22" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio22" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio21"); ?>"><label class="title">24. Je suis toujours préparé(e) ? <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio21" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio21" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
	<div class="element-radio<?php frmd_add_class("radio20"); ?>"><label class="title">25. Je panique rapidement ? <span class="required">*</span></label>		<div class="column column2"><label><input type="radio" name="radio20" value="Oui" required="required"/><span>Oui</span></label></div><span class="clearfix"></span>
		<div class="column column2"><label><input type="radio" name="radio20" value="Non" required="required"/><span>Non</span></label></div><span class="clearfix"></span>
</div>
<div class="submit"><input type="submit" value="Envoyé"/></div></form><script type="text/javascript" src="<?php echo dirname($form_path); ?>/formoid-solid-dark.js"></script>

<!-- Stop Formoid form-->
<?php endif; ?>

<?php frmd_end_form(); ?>