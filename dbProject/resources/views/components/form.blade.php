<div class="container mt-10">
    {!! Form::open(['url' => route('posts.store'), 'method'=> 'POST', 'class' => 'mt-3', 'enctype' => 'multipart/form-data']) !!}
    <div class="row d-flex justify-content-center">
        <div class="col-sm-8 col-lg-8">
            <div class="form-group">
            {!! Form::text('title', '', ['placeholder' => 'Title', 'class'=>'form-control']) !!}
            </div>
            <div class="form-group">
            {{ Form::textarea('body','',['id' => 'editor', 'placeholder' => 'Description', 'class'=>'form-control']) }}
            </div>
            <div class="form-group">
                {{ Form::file('cover_image') }}
            </div>
            <div class="form-group">
            {!! Form::submit('Publish', ['class' => 'btn btn-warning button']) !!}
            </div>
        </div>
    </div>
    {!! Form::close() !!}
</div>