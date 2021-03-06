<?php

namespace App\Http\Controllers;

use App\Action;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ActionController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index( $id )
	{
		return Action::where( 'instance_id', '=', $id )->orderBy('created_at')->get();
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Action  $action
	 * @return \Illuminate\Http\Response
	 */
	public function show(Action $action)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Action  $action
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Action $action)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Action  $action
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Action $action)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Action  $action
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Action $action)
	{
		//
	}
}
