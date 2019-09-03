<?php

namespace App\Http\Controllers;

use App\Build;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class BuildController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Build::where( [['user_id', '=', Auth::id()]] )->find();
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

        echo($request['buildType']);
        echo(json_encode($request['buildData']));

        $thisBuild = new Build;
        $thisBuild->build_id = $request['buildType'];
        $thisBuild->build_data = json_encode($request['buildData']);
        $thisBuild->user_id = Auth::id();
        $thisBuild->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Build  $build
     * @return \Illuminate\Http\Response
     */
    public function show(Build $build)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Build  $build
     * @return \Illuminate\Http\Response
     */
    public function edit(Build $build)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Build  $build
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Build $build)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Build  $build
     * @return \Illuminate\Http\Response
     */
    public function destroy(Build $build)
    {
        //
    }
}
