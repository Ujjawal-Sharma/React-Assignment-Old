@extends('layouts.app')

@section('form')
<div class="container">
    {!! Form::open(['url' => route('posts.update', $post->id), 'method'=> 'PUT', 'class' => 'mt-3', 'class'=>'form-control', 'enctype' => 'multipart/form-data']) !!}
    <div class="row d-flex justify-content-center">
        <div class="col-sm-8 col-lg-6">
            <div class="form-group">
            {!! Form::text('title', $post->title, ['placeholder' => 'Title']) !!}
            </div>
            <div class="form-group">
            {!! Form::textarea('body', $post->body, ['id' => 'editor', 'placeholder' => 'Description', 'class'=>'form-control']) !!}
            </div>
            <div class="form-group">
                {{ Form::file('cover_image') }}
            </div>
            <div class="form-group">
                {{Form::hidden('_method', 'PUT')}}
            {!! Form::submit('Update', ['class' => 'btn btn-warning button']) !!}
            </div>
        </div>
    </div>
    {!! Form::close() !!}
</div>
@endsection