/*
 * Copyright (c) 2018, The Modern Way. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.themodernway.api.gateway.rest.services

import org.springframework.http.HttpMethod
import org.springframework.stereotype.Service

import com.themodernway.server.core.json.JSONObject
import com.themodernway.server.rest.IRESTRequestContext
import com.themodernway.server.rest.MaxRequestBodySize
import com.themodernway.server.rest.RESTServiceSupport
import com.themodernway.server.rest.RequestBinding
import com.themodernway.server.rest.RequestMethod

import groovy.transform.CompileStatic

@Service
@CompileStatic
@MaxRequestBodySize(1024L)
@RequestMethod(HttpMethod.POST)
@RequestBinding('/demo/postback')
class PostBack extends RESTServiceSupport
{
    @Override
    def call(final IRESTRequestContext context, final JSONObject object) throws Exception
    {
        json(size: 1024, back: object, uuid: uuid())
    }
}

