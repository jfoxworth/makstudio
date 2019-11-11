<?php

namespace App\Listeners;

use App\User;
use App\Events\QuoteRequest;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use SendGrid;
use Illuminate\Support\Facades\Auth;

class SendQuoteEmail
{
	/**
	 * Create the event listener.
	 *
	 * @return void
	 */
	public function __construct()
	{
		//
	}

	/**
	 * Handle the event.
	 *
	 * @param  QuoteRequest  $event
	 * @return void
	 */
	public function handle(QuoteRequest $event)
	{

		$emailText =  '';

		if ( $event->build['build_id'] == "fossil" )
		{

			$emailText = '<html><head></head><body><h1>Your Quote from Mak Studios</h1><div><p>The table below shows the dimensions and settings that you selected for your fossil wall quote. Remember that these are quotes and are subject to taxes and other fees. You can <a href="http://www.makstudios.us/register">create an account</a> if you do not already have one, or <a href="http://www.makstudios.us/login">login</a> to see all of you models.</p></div>


			<table class=\"modalTable center\"
				   style=\"width:500px; margin-left:25px\">

				<tr style=\"height:35px; border-bottom:1px solid #ccc; font-weight:bold\">
					<th style=\"width:300px\">Quantity</th>
					<th>Amount</th>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Width of Wall</td><td>'.$event->build['build_data']['componentValues']['Wall Width'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Height of Wall</td><td>'.$event->build['build_data']['componentValues']['Wall Height'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Fossil Shape Count</td><td>'.$event->build['build_data']['componentValues']['Shape Count'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Fossil Factor</td><td>'.$event->build['build_data']['componentValues']['Factor'].'</td>
				</tr>

				<tr style=\"height:30px; background-color:#888; color:#fff\">
					<td>Price</td><td>$ '.$event->build['build_data']['price'].'</td>
				</tr>

			</table></body></html>';


		}elseif ( $event->build['build_id'] == "flower" )
		{

			$flowerText = '';
			$flowerIndex = 1;

			foreach ($event->build['build_data']['componentValues']['flowersJSON']['flowers'] as $key => $value)
			{
				$flowerText = $flowerText.'<tr>';
					$flowerText = $flowerText.'<td>'.$flowerIndex.'</td>';
					$flowerText = $flowerText.'<td>Size -'.$event->build['build_data']['componentValues']['flowersJSON']['flowers'][$key]['size'].'</td>';
					$flowerText = $flowerText.'<td>Rotation - '.$event->build['build_data']['componentValues']['flowersJSON']['flowers'][$key]['rotation'].'</td>';
					$flowerText = $flowerText.'<td>X - '.$event->build['build_data']['componentValues']['flowersJSON']['flowers'][$key]['position'][0].'</td>';
					$flowerText = $flowerText.'<td>Y - '.$event->build['build_data']['componentValues']['flowersJSON']['flowers'][$key]['position'][1].'</td>';
				$flowerText = $flowerText.'</tr>';
				$flowerIndex = $flowerIndex+1;
			}

			$emailText = '<html><head></head><body><h1>Your Quote from Mak Studios</h1><div><p>The table below shows the dimensions and settings that you selected for your flower wall quote. Remember that these are quotes and are subject to taxes and other fees. You can <a href="http://www.makstudios.us/register">create an account</a> if you do not already have one, or <a href="http://www.makstudios.us/login">login</a> to see all of you models.</p></div>


			<table class=\"modalTable center\"
				   style=\"width:500px; margin-left:25px\">

				<tr style=\"height:35px; border-bottom:1px solid #ccc; font-weight:bold\">
					<th style=\"width:300px\">Quantity</th>
					<th>Amount</th>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Width of Wall</td><td>'.$event->build['build_data']['componentValues']['Wall Width'].' in</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Height of Wall</td><td>'.$event->build['build_data']['componentValues']['Wall Height'].' in</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Flower positions</td><td></td>
				</tr>

				'.$flowerText.'

				<tr style=\"height:30px; background-color:#888; color:#fff\">
					<td>Price</td><td>$ '.$event->build['build_data']['price'].'</td>
				</tr>

			</table></body></html>';


		}elseif ( $event->build['build_id'] == "backlit" )
		{

			$emailText = '<html><head></head><body><h1>Your Quote from Mak Studios</h1><div><p>The table below shows the dimensions and settings that you selected for your backlit wall quote. Remember that these are quotes and are subject to taxes and other fees. You can <a href="http://www.makstudios.us/register">create an account</a> if you do not already have one, or <a href="http://www.makstudios.us/login">login</a> to see all of you models.</p></div>


			<table class=\"modalTable center\"
				   style=\"width:500px; margin-left:25px\">

				<tr style=\"height:35px; border-bottom:1px solid #ccc; font-weight:bold\">
					<th style=\"width:300px\">Quantity</th>
					<th>Amount</th>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Length of Wall</td><td>'.$event->build['build_data']['componentValues']['LENGTH OF WALL'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Height of Wall</td><td>'.$event->build['build_data']['componentValues']['Height of Wall'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Show Logo</td><td>'.$event->build['build_data']['componentValues']['Logo?'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Logo Scale</td><td>'.$event->build['build_data']['componentValues']['Logo Scale'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Logo X Location</td><td>'.$event->build['build_data']['componentValues']['Logo X Location'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Logo Z Location</td><td>'.$event->build['build_data']['componentValues']['Logo Z Location'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Create Flat Area</td><td>'.$event->build['build_data']['componentValues']['Create Flat Area?'].'</td>
				</tr>


				<tr style=\"height:30px; background-color:#888; color:#fff\">
					<td>Price</td><td>$ '.$event->build['build_data']['price'].'</td>
				</tr>

			</table></body></html>';





		}elseif ( $event->build['build_id'] == "bench" )
		{

			if ( $event->build['build_data']['componentValues']['Left Planter'] == 0 )
			{
				$leftBench = "No Left Planter";
			
			}elseif ( $event->build['build_data']['componentValues']['Left Planter'] == 1 )
			{
				$leftBench = "One Quarter Width Left Planter";

			}elseif ( $event->build['build_data']['componentValues']['Left Planter'] == 2 )
			{
				$leftBench = "One Half Width Left Planter";

			}elseif ( $event->build['build_data']['componentValues']['Left Planter'] == 3 )
			{
				$leftBench = "Full Width Left Planter";

			}

			if ( $event->build['build_data']['componentValues']['Right Planter'] == 0 )
			{
				$rightBench = "No Left Planter";
			
			}elseif ( $event->build['build_data']['componentValues']['Right Planter'] == 1 )
			{
				$rightBench = "One Quarter Width Left Planter";

			}elseif ( $event->build['build_data']['componentValues']['Right Planter'] == 2 )
			{
				$rightBench = "One Half Width Left Planter";

			}elseif ( $event->build['build_data']['componentValues']['Right Planter'] == 3 )
			{
				$rightBench = "Full Width Left Planter";

			}


			$emailText = '<html><head></head><body><h1>Your Quote from Mak Studios</h1><div><p>The table below shows the dimensions and settings that you selected for your bench quote. Remember that these are quotes and are subject to taxes and other fees. You can <a href="http://www.makstudios.us/register">create an account</a> if you do not already have one, or <a href="http://www.makstudios.us/login">login</a> to see all of you models.</p></div>


			<table class=\"modalTable center\"
				   style=\"width:500px; margin-left:25px\">

				<tr style=\"height:35px; border-bottom:1px solid #ccc; font-weight:bold\">
					<th style=\"width:300px\">Quantity</th>
					<th>Amount</th>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Bench Depth</td><td>'.$event->build['build_data']['componentValues']['Bench Depth'].' in</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Bench Height</td><td>'.$event->build['build_data']['componentValues']['Bench Height'].' in</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Twist Length</td><td>'.$event->build['build_data']['componentValues']['Twist Length'].' ft</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Left Seating Length</td><td>'.$event->build['build_data']['componentValues']['Left Seating Length'].' ft</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Right Seating Length</td><td>'.$event->build['build_data']['componentValues']['Right Seating Length'].' ft</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Left Bench Size</td><td>'.$leftBench.'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Right Bench Size</td><td>'.$rightBench.'</td>
				</tr>

				<tr style=\"height:30px; background-color:#888; color:#fff\">
					<td>Price</td><td>$ '.$event->build['build_data']['price'].'</td>
				</tr>

			</table></body></html>';




		}elseif ( $event->build['build_id'] == "faceted" )
		{

			$emailText = '<html><head></head><body><h1>Your Quote from Mak Studios</h1><div><p>The table below shows the dimensions and settings that you selected for your faceted wall quote. Remember that these are quotes and are subject to taxes and other fees. You can <a href="http://www.makstudios.us/register">create an account</a> if you do not already have one, or <a href="http://www.makstudios.us/login">login</a> to see all of you models.</p></div>


			<table class=\"modalTable center\"
				   style=\"width:500px; margin-left:25px\">

				<tr style=\"height:35px; border-bottom:1px solid #ccc; font-weight:bold\">
					<th style=\"width:300px\">Quantity</th>
					<th>Amount</th>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel A Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel A Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel B Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel B Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel C Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel C Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel D Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel D Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel E Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel E Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel F Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel F Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel G Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel G Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel H Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel H Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel I Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel I Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel J Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel J Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel K Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel K Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel L Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel L Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel M Rotation</td><td>'.$event->build['build_data']['componentValues']['Panel M Rotation'].'</td>
				</tr>

				<tr style=\"height:30px; background-color:#888; color:#fff\">
					<td>Price</td><td>$ '.$event->build['build_data']['price'].'</td>
				</tr>

			</table></body></html>';



		}elseif ( $event->build['build_id'] == "finWall" )
		{

			if ( $event->build['build_data']['componentValues']['Material'] == 0 )
			{
				$materialType = "Baltic Birch";
			
			}elseif ( $event->build['build_data']['componentValues']['Material'] == 1 )
			{
				$materialType = "Baltic Birch Laminate";

			}elseif ( $event->build['build_data']['componentValues']['Material'] == 2 )
			{
				$materialType = "Colored MDF";
			}



			if (isset( $event->build['build_data']['componentValues']['Colored MDF'] )) 
			{
				$colorMDF = $event->build['build_data']['componentValues']['Colored MDF'];

			}else
			{
				$colorMDF = "NA";
			}
			
			if (isset( $event->build['build_data']['componentValues']['Back Panel Color'] )) 
			{
				$colorBack = $event->build['build_data']['componentValues']['Back Panel Color'];

			}else
			{
				$colorBack = "NA";
			}


			$emailText = '<html><head></head><body><h1>Your Quote from Mak Studios</h1><div><p>The table below shows the dimensions and settings that you selected for your slat wall quote. Remember that these are quotes and are subject to taxes and other fees. You can <a href="http://www.makstudios.us/register">create an account</a> if you do not already have one, or <a href="http://www.makstudios.us/login">login</a> to see all of you models.</p></div>


			<table class=\"modalTable center\"
				   style=\"width:500px; margin-left:25px\">

				<tr style=\"height:35px; border-bottom:1px solid #ccc; font-weight:bold\">
					<th style=\"width:300px\">Quantity</th>
					<th>Amount</th>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Fins Thickness</td><td>'.$event->build['build_data']['componentValues']['Fins Thickness'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Height of Wall</td><td>'.$event->build['build_data']['componentValues']['Height of Wall'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Length of Wall</td><td>'.$event->build['build_data']['componentValues']['Lenght of Wall'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Logo</td><td>'.$event->build['build_data']['componentValues']['Logo?'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Logo Intensity</td><td>'.$event->build['build_data']['componentValues']['Logo Intensity (%)'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Logo X Position</td><td>'.$event->build['build_data']['componentValues']['Position X Logo (%)'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Logo Z Position</td><td>'.$event->build['build_data']['componentValues']['Position Z Logo (%)'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Panel Rotation</td><td>'.$event->build['build_data']['componentValues']['Rotate Panels'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Spacing of Fins</td><td>'.$event->build['build_data']['componentValues']['Spacing of Fins'].'</td>
				</tr>


				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Material</td><td>'.$materialType.'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Material Color</td><td>'.$colorMDF.'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Background Color</td><td>'.$colorBack.'</td>
				</tr>


				<tr style=\"height:30px; background-color:#888; color:#fff\">
					<td>Price</td><td>$ '.$event->build['build_data']['price'].'</td>
				</tr>

			</table></body></html>';

		}


		if ( $event->email == '' )
		{
			$user = User::findOrFail(Auth::id());
			$userEmail = $user->email;
		}else
		{
			$userEmail = $event->email;
		}


		// Send email to user
		$from = new SendGrid\Email(null, "quotes@makstudio.us");
		$subject = "Your quote from Mak Studio";
		$to = new SendGrid\Email(null, $userEmail);
		$content = new SendGrid\Content("text/html", $emailText);
		$mail = new SendGrid\Mail($from, $subject, $to, $content);

		$apiKey = getenv('SENDGRID_API_KEY');
		$sg = new \SendGrid($apiKey);

		$response = $sg->client->mail()->send()->post($mail);
		echo $response->statusCode();
		echo $response->headers();
		echo $response->body();



		// Send email to make studio
		$from = new SendGrid\Email(null, "quotes@makstudio.us");
		$subject = "Your quote from Mak Studio";
		$to = new SendGrid\Email(null, "orders@makstudio.us");
		$content = new SendGrid\Content("text/html", $emailText);
		$mail = new SendGrid\Mail($from, $subject, $to, $content);

		$apiKey = getenv('SENDGRID_API_KEY');
		$sg = new \SendGrid($apiKey);

		$response = $sg->client->mail()->send()->post($mail);
		echo $response->statusCode();
		echo $response->headers();
		echo $response->body();


	}
}
