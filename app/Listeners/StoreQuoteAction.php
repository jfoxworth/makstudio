<?php

namespace App\Listeners;

use App\Events\QuoteRequest;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Build;
use App\Instance;
use App\Action;
use Illuminate\Support\Facades\Auth;




class StoreQuoteAction
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


		$thisAction = new Action;
		$thisAction->design_type = $event->build->design_type;
		$thisAction->instance_id = $event->instance->id;
		$thisAction->user_id = Auth::id();
		$thisAction->action = 'Quote Requested';
		$thisAction->info = json_encode(array('build_id' => $event->build->id; 'build' => $event->build ));
		$thisAction->save();

	}
}